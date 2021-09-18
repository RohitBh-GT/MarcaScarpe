import React from 'react';
import {Card,Typography} from '@material-ui/core';
import useStyles from './styles.js';

const Brand = (props) => {
    const classes = useStyles();
    return (
     <Card className={classes.brandCard} sx={{ maxWidth: 200 }}>
      <img className={classes.brandImg} src={props.imgSrc} alt={props.name} width="60%" />
        <Typography className={classes.brandName} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
    </Card>
    );
}

export default Brand;