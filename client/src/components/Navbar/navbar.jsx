import React from 'react';
import useStyles from './styles.js';
import Logo from '../../assets/images/marcascarpe.png';
import { Link } from '@material-ui/core';
import { Search,ShoppingBasket } from '@material-ui/icons';

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <Link href="/"><img className={classes.logo} src={Logo} alt="Marca Scarpe" /></Link>
            </div>
            <div className={classes.search}>
                <input className={classes.search_input} placeholder="Search any Item" type="text" />
                <Search className={classes.search_logo} />
            </div>
            <div className={classes.rightNav}>
                <div className={classes.option}>
                    <span className={classes.upper}>Your</span>
                    <Link className={classes.down} href="#"><span>Account</span></Link>
                </div>
                <div className={classes.option}>
                    <span className={classes.upper}>Your</span>
                    <Link className={classes.down} href="#"><span className={classes.down}>Orders</span></Link>
                </div>
                <div className={classes.option}>
                    <span className={classes.upper}><ShoppingBasket /></span>
                    <Link className={classes.down} href="#"><span className={classes.down}>Cart</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;