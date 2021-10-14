import React,{ useState,useEffect } from 'react';
import useStyles from './styles.js';
import { getToken,getCartProducts,getCartLength } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem/cartItem.jsx';
import './styles.css';
 
const Cart = () => {
    const classes = useStyles();
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }

    useEffect(()=> {
        setCartItems(getCartProducts());
    },[getCartLength()]);

    const [cartItems,setCartItems] = useState(getCartProducts());

    return (
        <div className='cartItemBox'>
            {cartItems.length>0 && cartItems.map((item)=> (
                <CartItem key={item._id} productId={item._id} productImage={item.productImage} productName={item.productName} 
                productBrand={item.productBrand} productDiscountPrice={item.productDiscountPrice}
                productRating={item.productRating} productSize={item.size} productColor={item.productColor}
                productQuantity={item.quantity} stock={item.stock} />
            ))}
        </div>
    );
}

export default Cart;