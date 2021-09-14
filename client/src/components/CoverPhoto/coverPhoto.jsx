import React from 'react';
import Cover from '../../assets/images/coverPhoto.jpg';
import useStyles from './styles.js';

const CoverPhoto = () => {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <div className={classes.home_photo}>
                <img className={classes.image} src={Cover} alt="Shoes on Discount" />
            </div>
        </div>
    )
}

export default CoverPhoto;