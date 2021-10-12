import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles.js';

const SingleDeal = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const url = `/product?productId=${props.productId}&productName=${props.name}`;

  const showProduct = (e) => {
    e.preventDefault();
    history.push(url);
  }
  
  return (
    <Card className={classes.dealCard} onClick={showProduct} sx={{ maxWidth: 200 }}>
      <img className={classes.dealImg} src={props.imgSrc} alt={props.name} width="60%" />
      <Typography className={classes.dealName} gutterBottom variant="h6" component="div">
        {props.name}
      </Typography>
      <div className={classes.dealOption}>
        <div>
        <span className={classes.dealDiscount}>
          {props.discountPrice}
        </span>
        <span className={classes.dealPrice}>
          {props.price}
        </span>
        </div>
        <div>
          <a className={classes.seeMore} onClick={showProduct}>See More</a>
          </div>
      </div>
    </Card>
  );
}

export default SingleDeal;