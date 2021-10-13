import React from 'react';
import { Grid } from '@material-ui/core';
import SingleBrandItem from './SingleBrandItem/singleBrandItem.jsx';
import useStyles from './styles.js';

const BrandGrid = ({brands}) => {
    const classes = useStyles();
    return (
        <Grid container>
            {brands.map((brand) => (
                <Grid className={classes.singleItem} item xs={6} sm={6} md={4} lg={3}>
                    <SingleBrandItem key={brand.productName} productId={brand._id} imgSrc={brand.productImage} name={brand.productName} 
                     discountPrice={brand.productDiscountPrice} />
                </Grid>
            ))}
        </Grid>
    );
}

export default BrandGrid;