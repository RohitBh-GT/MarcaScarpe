import React,{ useState,useEffect } from 'react';
import useStyles from './styles.js';
import { getCartProducts} from '../../utils/common.js';
import CartItem from './CartItem/cartItem.jsx';
import Bag from '../../assets/images/bag.png'
import './styles.css';
 
const Cart = () => {
    const classes = useStyles();

    const [cartItems,setCartItems] = useState(getCartProducts());

    return (
        <> <span className={classes.cartHead}>Items in Cart ({cartItems.length})</span>
        <div className='cartItemBox'>
            {cartItems.length>0 ? cartItems.map((item,index)=> (
                <CartItem key={index} productId={item._id} productImage={item.productImage} productName={item.productName} 
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