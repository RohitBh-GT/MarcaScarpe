import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const SingleDeal = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.dealCard} sx={{ maxWidth: 200 }}>
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
          <a className={classes.seeMore} href="#">See More</a>
          </div>
      </div>
    </Card>
  );
}

export default SingleDeal;