import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';
import { removeWishItem } from '../../../actions/profile.js';
import { useDispatch } from 'react-redux';
import { Clear } from '@material-ui/icons';
import { getToken } from '../../../utils/common.js';

const Wish = ({wishItem,wish,setWishItem}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const url = `/product?productId=${wish._id}&productName=${wish.productName}`;

  const showProduct  = (event) => {
    event.preventDefault();
    history.push(url);
  }

  const removeItem = (e) => {
      e.preventDefault();
      if(getToken()){
       dispatch(removeWishItem({email:getToken().result.emailId,wishListItem:wish}));
       const oldWish = wishItem;
       oldWish.wishlist = oldWish.wishlist.filter((old)=> old.productName !== wish.productName);
       setWishItem(oldWish); 
      }
  }

  return (
    <Card className={classes.wishCard} sx={{ maxWidth: 200 }}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span className={classes.wishBrand}>{wish.productBrand}</span>
          <span><Clear onClick={removeItem} style={{color:'#fe6b02'}} /></span>
      </div>  
      <img className={classes.wishImg} src={wish.productImage} alt={wish.productName} width="60%" />
      <Typography className={classes.wishProductName} gutterBottom variant="h6" component="div">
        {wish.productName}
      </Typography>
      <div className={classes.wishOption}>
        <div>
        <span className={classes.wishDiscount}>
          {wish.productDiscountPrice}
        </span>
        </div>
        <div>
          <a onClick={showProduct} className={classes.wishSeeMore}>View Product</a>
          </div>
      </div>
    </Card>
  );
}

export default Wish;