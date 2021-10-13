import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';

const SingleBrandItem = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const url = `/product?productId=${props.productId}&productName=${props.name}`;

  const showProduct  = (event) => {
    event.preventDefault();
    history.push(url);
  }

  return (
    <Card onClick={showProduct} className={classes.brandItemCard}>
      <img className={classes.brandItemImg} src={props.imgSrc} alt={props.name} width="60%" />
      <Typography className={classes.brandItemName} gutterBottom variant="h6" component="div">
        {props.name}
      </Typography>
      <div className={classes.brandItemOption}>
        <div>
        <span className={classes.brandItemDiscount}>
          {props.discountPrice}
        </span>
        </div>
        <div>
          <a onClick={showProduct} className={classes.brandItemSeeMore}>See More</a>
          </div>
      </div>
    </Card>
  );
}

export default SingleBrandItem;