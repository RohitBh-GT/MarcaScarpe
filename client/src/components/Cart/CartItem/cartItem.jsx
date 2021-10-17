import React,{ useState,useEffect } from 'react';
import Rating from '@mui/material/Rating'
import useStyles from './styles.js';
import { setQuantityAndPrice,removeFromCart,getCartProducts } from '../../../utils/common.js';
import { useHistory } from 'react-router-dom';

const CartItem = (props) => {
    const classes = useStyles();
    const [quant,setQuant] = useState(props.productQuantity);
    const history = useHistory();
    const url = `/product?productId=${props.productId}&productName=${props.productName}`
    const [change,setChange] = useState(false);

    const increaseQuantity = (e) => {
        e.preventDefault();
        if(quant<props.stock){
            localStorage.setItem('CartChanged',JSON.stringify(!change));
            setChange(!change);
            setQuantityAndPrice(props.productId,quant+1,props.productSize,props.productColor);
            setQuant(quant+1);
            props.setCartBox(getCartProducts())
        }
    }

    const decreaseQuantity = (e) => {
        e.preventDefault();
        if(quant>1){
            localStorage.setItem('CartChanged',JSON.stringify(!change));
            setChange(!change);
            setQuantityAndPrice(props.productId,quant-1,props.productSize,props.productColor);
            setQuant(quant-1);
            props.setCartBox(getCartProducts())
        }
    }

    const viewItem = (e) => {
        e.preventDefault();
        history.push(url);
    }

    const removeFromcart = (e) => {
        e.preventDefault();
        removeFromCart(props.productId,props.productSize,props.productColor);
        props.setCartBox(getCartProducts())
    }

    return (
        <div className={classes.cartItemCard}>
            <div className={classes.cartItemImage}>
                <img style={{padding:'4%',height:"80%",width:'80%'}} src={props.productImage} alt={props.productName} />
            </div>
            <div className={classes.cartItemMiddle}>
                <h4 className={classes.cartItemPName}>{props.productName}</h4>
                <div className={classes.cartItemMidHead}>
                    <span className={classes.cartitemPBrand}>{props.productBrand}</span>
                    <Rating className={classes.cartitemPRating} name="read-only-rating" value={props.productRating} readOnly />
                </div>
                <div className={classes.cartitemPSize}>Size: {props.productSize}</div>
                <div className={classes.cartitemPColor}>Colour: <span style={{color:props.productColor}}> {props.productColor.toUpperCase()} </span></div>
                <div className={classes.cartitemPPrice}>Price: {props.productDiscountPrice.charAt(0)} {(props.productDiscountPrice.slice(1).replace(/,/g, '')*quant).toFixed(2)}</div>
                <span className={classes.cartitemPQuantity}>Quantity: <button onClick={decreaseQuantity} className={classes.quantButton}>-</button> {quant} <button className={classes.quantButton} onClick={increaseQuantity}>+</button></span>
            </div>
            <div className={classes.cartitemButtons}>
                <button className={classes.removeFromcart} onClick={viewItem}>View Item</button>
                <button className={classes.removeFromcart} onClick={removeFromcart}>Remove from cart</button>
            </div>
        </div>
    );
}

export default CartItem;