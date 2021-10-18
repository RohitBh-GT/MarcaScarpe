import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Wish from './Wish/wish.jsx';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';
import EmptyWish from '../../assets/images/emptyWishList.png';

const WishList = ({ profile, setProf }) => {
    const [wishItem, setWishItem] = useState(profile);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        setProf([wishItem]);
    }, [wishItem]);

    const continueShopping = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div>
            <Grid container>
                {wishItem.wishlist.length > 0 ?
                    wishItem.wishlist.map((wish, index) => (
                        <Grid className={classes.singleItem} key={index} item xs={6} md={4} lg={3}>
                            <Wish wishItem={wishItem} wish={wish} setWishItem={setWishItem} />
                        </Grid>
                    ))
                    : <div className={classes.emptyList}>
                        <img src={EmptyWish} style={{ marginTop: '4%' }} alt="WishList is Empty" width="40%" height="40%" />
                        <h2 style={{color: '#fe6b02'}}>Your Wishlist is empty.</h2>
                        <button onClick={continueShopping} className={classes.shoppingButton}>Continue Shopping</button>
                      </div>}
            </Grid>
        </div>
    );
}

export default WishList;