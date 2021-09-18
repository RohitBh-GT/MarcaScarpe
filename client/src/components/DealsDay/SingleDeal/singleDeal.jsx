import React from 'react';
import {Card,Typography} from '@material-ui/core';
import useStyles from './styles.js';

const SingleDeal = (props) => {
    const classes = useStyles();
    return (
     <Card className={classes.dealCard} sx={{ maxWidth: 200 }}>
      <img className={classes.dealImg} src={props.imgSrc} alt={props.name} width="60%" />
        <Typography className={classes.dealName} gutterBottom variant="h5" component="div">
          {props.name} 
        </Typography>
        <Typography className={classes.dealPrice} gutterBottom variant="h5" component="div">
          {props.price} 
        </Typography>
        <Typography className={classes.dealDiscount} gutterBottom variant="h5" component="div">
          {props.discountPrice} 
        </Typography>
    </Card>
    );
}

export default SingleDeal;