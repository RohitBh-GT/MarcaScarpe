import React,{ useState,useEffect } from 'react';
import useStyles from './styles.js';
import { getCartProducts} from '../../utils/common.js';
import CartItem from './CartItem/cartItem.jsx';
import Bag from '../../assets/images/bag.png'
import './styles.css';
 
const Cart = ({cartBox,setCartBox}) => {
    const classes = useStyles();

    return (
        <> <span className={classes.cartHead}>Items in Cart ({cartBox.length})</span>
        <div className='cartItemBox'>
            {cartBox.length>0 ? cartBox.map((item,index)=> (
                <CartItem key={index} setCartBox={setCartBox} productId={item._id} productImage={item.productImage} productName={item.productName} 
                productBrand={item.productBrand} productDiscountPrice={item.productDiscountPrice}
                productRating={item.productRating} productSize={item.size} productColor={item.productColor}
                productQuantity={item.quantity} stock={item.stock} />
            )) :
            <div className={classes.emptyCart}>
                <img src={Bag} style={{marginTop:'4%'}} alt="Cart is Empty" width="40%" height="40%" />
                <h2 style={{color:'#fe6b02'}}>No product has been added to cart</h2>
            </div>
        }
        </div>
        </>
    );
}

export default Cart;