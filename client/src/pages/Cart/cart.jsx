import React from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import CartItems from '../../components/Cart/cart.jsx'; 
import './styles.css';

const Cart = () => {
    return (
        <div className='cartPage'>
        <Navbar />
        <div className='cartBox'>
            <div className='cartItems'>
                <CartItems />
            </div>
            <div className='billSide'>
                Bill and Place Order Here
            </div>
        </div>
        </div>
    )
}

export default Cart;