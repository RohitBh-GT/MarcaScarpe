import React, { useState, useEffect } from 'react';
import { getCartProducts } from '../../utils/common.js';
import './styles.css';

const ConfirmOrder = ({activeStep,setActiveStep}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartBox,setCartBox] = useState(getCartProducts());

    useEffect(() => {
        var total = 0;
        for (var i = 0; i < cartBox.length; i++) {
            total = Number(total) + Number((cartBox[i].productDiscountPrice.slice(1).replace(/,/g, '') * cartBox[i].quantity).toFixed(2));
        }
        setTotalPrice(total);
    }, []);

    const confirmOrder = (e) => {
        e.preventDefault();
        setActiveStep(activeStep+1);
    }

    return (
        <div className='cOrderBox'>
            <div className='cOrderHead'>Your Bill</div>
            <div>
                {cartBox.length > 0 && cartBox.map((item) => (
                    <div className='cOrderTitle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{fontSize:'1rem'}}>{item.productName} x {item.quantity}</div>
                        <div>{item.productDiscountPrice.charAt(0)} {(item.productDiscountPrice.slice(1).replace(/,/g, '') * item.quantity).toFixed(2)}</div>
                    </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', fontWeight: 'bold' }}>
                    <div style={{ fontSize: '1rem' }}>Total price:</div>
                    <div style={{ fontSize: '1rem' }}>₹ {totalPrice}.00</div>
                </div>
                <button onClick={confirmOrder} className='confirmOrder'>Confirm Order</button>
            </div>
        </div>
    );
}

export default ConfirmOrder;