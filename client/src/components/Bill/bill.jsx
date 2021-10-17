import React,{ useState,useEffect } from 'react';
import { getCartProducts,getCartChanged,getCartLength } from '../../utils/common.js';
import './styles.css';

const Bill = () => {
    const [itemsInCart,setItemsInCart] = useState(getCartProducts());
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=> {
        console.log(getCartChanged());
        setItemsInCart(getCartProducts());
    },[getCartChanged()]);

    return (
        <div>
            <h2>Your Bill</h2>
            <div>
                {itemsInCart.length > 0 && itemsInCart.map((item)=> (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>{item.productName} x {item.quantity}</div>
                        <div>{item.productDiscountPrice.charAt(0)} {(item.productDiscountPrice.slice(1).replace(/,/g, '')*item.quantity).toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bill;