import React from 'react';
import Cover from '../../assets/images/coverPhoto.jpg';
import useStyles from './styles.js';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './styles.css';
import { useHistory } from 'react-router-dom';
import App from '../../assets/images/App.png';
import Reward from '../../assets/images/reward.png';

const CoverPhoto = ({profile}) => {
    const classes = useStyles();
    const history = useHistory();

    const openWishlist = (e) => {
        e.preventDefault();
        history.push('/your-wishlist');
    }

    return (
        <div className={classes.home}>
            <div className="home_photo">
                <img className={classes.image} src={Cover} alt="Shoes on Discount" />
            </div>
            <div className={classes.cardGrid}>
                <Grid container spacing={3}>
                    <Grid className="card" item xs={4} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.heading} variant="h5" component="h2">
                                    Hi {profile.userName}
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Customer since {profile.timeStamp}
                                </Typography>
                                <div className={classes.cardBody}>
                                    <div className={classes.cardOption}>
                                        <span className={classes.cardUpper}>Your Orders</span>
                                        <span className={classes.cardDown}>{profile.orders.length}</span>
                                    </div>
                                    <div className={classes.cardOption}>
                                        <span onClick={openWishlist} style={{'&:hover':{textDecoration:'underline',cursor:'pointer'}}} className={classes.cardUpperWish}>Your Wishlist</span>
                                        <span className={classes.cardDown}>{profile.wishlist.length}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className="card" item xs={4} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.rewardsHead} variant="h5" component="h2">
                                    <img className={classes.rewardImg} src={Reward} alt="Reward" /> Rewards
                                </Typography>
                                <div className={classes.cardBody} style={{ marginTop: '32px' }}>
                                    <div className={classes.cardOption}>
                                        <span className={classes.cardUpper}>Cash Rewarded</span>
                                        <span className={classes.cardDown}>Rs {profile.rewardedCash}</span>
                                    </div>
                                    <div className={classes.cardOption}>
                                        <span className={classes.cardUpper}>Gift Vouchers</span>
                                        <span className={classes.cardDown}>{profile.giftVouchers}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className="card" item xs={4} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.heading} variant="h5" component="h2">
                                    Download Marca Scarpe App
                                </Typography>
                                <div style={{ textAlign: 'center' }}>
                                    <img className={classes.downloadImg} src={App} alt="Google Play" />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CoverPhoto;