import React,{ useState,useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import CartItems from '../../components/Cart/cart.jsx'; 
import { getToken,getCartProducts } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import Bill from '../../components/Bill/bill.jsx';
import './styles.css';

const Cart = () => {
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }
    const [cartBox,setCartBox] = useState(getCartProducts());

    return (
        <div className='cartPage'>
        <Navbar />
        <div className='cartBox'>
            <div className='cartItems'>
                <CartItems cartBox={cartBox} setCartBox={setCartBox} />
            </div>
            <div className='billSide'>
                <Bill cartBox={cartBox} setCartBox={setCartBox} />
            </div>
        </div>
        </div>
    )
}

export default Cart;