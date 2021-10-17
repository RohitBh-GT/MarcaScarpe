import React,{ useState,useEffect } from 'react';
import { getCartProducts,getCartChanged,getCartLength } from '../../utils/common.js';
import './styles.css';

const Bill = ({cartBox,setCartBox}) => {
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=> {
        var total = 0;
        for(var i=0;i<cartBox.length;i++){
            total=Number(total) + Number((cartBox[i].productDiscountPrice.slice(1).replace(/,/g, '')*cartBox[i].quantity).toFixed(2));
            console.log(total);
        }
        setTotalPrice(total);
    },[cartBox]);

    return (
        <div className='billBox'>
            <div className='billHead'>Your Bill</div>
            <div>
                {cartBox.length > 0 && cartBox.map((item)=> (
                    <div className='billTitle' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>{item.productName} x {item.quantity}</div>
                        <div>{item.productDiscountPrice.charAt(0)} {(item.productDiscountPrice.slice(1).replace(/,/g, '')*item.quantity).toFixed(2)}</div>
                    </div>
                ))}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'2%',fontWeight:'bold'}}>
                    <div style={{fontSize:'1.2rem'}}>Total price:</div> 
                    <div style={{fontSize:'1.2rem'}}>₹ {totalPrice}.00</div>
                </div>
                <button className='placeOrder'>Place My Order</button>
            </div>
        </div>
    );
}

export default Bill;