import React from 'react';
import {Card,Typography} from '@material-ui/core';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';

const Brand = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const url =`/brand?brandName=${props.name}`;

    const showBrand = (e) => {
      e.preventDefault();
      history.push(url);
    }

    return (
     <Card className={classes.brandCard} onClick={showBrand} sx={{ maxWidth: 200 }}>
      <img className={classes.brandImg} src={props.imgSrc} alt={props.name} width="60%" />
        <Typography className={classes.brandName} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
    </Card>
    );
}

export default Brand;