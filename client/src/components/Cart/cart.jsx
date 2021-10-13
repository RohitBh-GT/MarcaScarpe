import React,{ useState,useEffect } from 'react';
import useStyles from './styles.js';
import { getToken,getCartProducts } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
 
const Cart = () => {
    const classes = useStyles();
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }

    const [cartItems,setCartItems] = useState(getCartProducts());

    return (
        <div>
            {cartItems.length>0 && cartItems.map((item)=> (
                <h1>{item.productName}</h1>
            ))}
        </div>
    );
}

export default Cart;