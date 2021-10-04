import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';

const Gender = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const url = `/product?productId=${props.productId}&productName=${props.name}`;

  const showProduct  = (event) => {
    event.preventDefault();
    history.push(url);
  }

  return (
    <Card onClick={showProduct} className={classes.genderCard} sx={{ maxWidth: 200 }}>
      <img className={classes.genderImg} src={props.imgSrc} alt={props.name} width="60%" />
      <Typography className={classes.genderName} gutterBottom variant="h6" component="div">
        {props.name}
      </Typography>
      <div className={classes.genderOption}>
        <div>
        <span className={classes.genderDiscount}>
          {props.discountPrice}
        </span>
        </div>
        <div>
          <a onClick={showProduct} className={classes.genderSeeMore}>See More</a>
          </div>
      </div>
    </Card>
  );
}

export default Gender;