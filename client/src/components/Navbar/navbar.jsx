import React, { useState,useEffect } from 'react';
import useStyles from './styles.js';
import Logo from '../../assets/images/marcascarpe.png';
import { Link } from '@material-ui/core';
import { Search, ShoppingBasket } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { getCartLength } from '../../utils/common.js';

const Navbar = () => {
    const classes = useStyles();
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            color:'black',
            border: `2px solid black`,
            padding: '0 6px',
            backgroundColor:'#fe6b02',
            fontWeight:'700'
        },
    }));
    const history = useHistory();

    const [cartLength,setCartLength] = useState(0);

    const openCart = (e) => {
        e.preventDefault();
        history.push('/your-cart');
    }

    useEffect(()=> {
        setCartLength(getCartLength());
    },[getCartLength()]);

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
                    <Link className={classes.down} href="/your-account"><span>Account</span></Link>
                </div>
                <div className={classes.option}>
                    <span className={classes.upper}>Your</span>
                    <Link className={classes.down} href="/your-orders"><span className={classes.down}>Orders</span></Link>
                </div>
                <div className={classes.option}>
                    <StyledBadge badgeContent={cartLength} color="secondary">
                    <span onClick={openCart} className={classes.upper}><ShoppingBasket /></span>
                    </StyledBadge>
                    <Link className={classes.down} href="/your-cart"><span className={classes.down}>Cart</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;