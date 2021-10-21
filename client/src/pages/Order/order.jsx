import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import { useSelector } from 'react-redux';
import Order from '../../components/Order/order.jsx';
import EmptyOrder from '../../assets/images/EmptyOrder.png';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Orders = () => {
    const myProfile = useSelector((state) => state.profile);
    const [prof, setProf] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setProf(myProfile);
    }, [myProfile]);

    const startShopping = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div className='orderPage'>
            <Navbar />
            <div className='orders'>
                {prof.length > 0 && prof[0].orders.length>0? <div>
                    {prof[0].orders.slice(0).reverse().map((order) => (
                        <>
                            <Order order={order} />
                        </>
                    ))}</div> : <div className='emptyOrder'>
                    <img src={EmptyOrder} style={{ marginTop: '4%' }} alt="No Order Placed" width="30%" height="30%" />
                    <h2 style={{ color: '#fe6b02' }}>You haven't order anything yet.</h2>
                    <span style={{ color: '#fe6b02' }}>Order, then you can track your all orders here.</span>
                    <button onClick={startShopping} className='shoppingButton'>Start Shopping</button>
                </div>}
            </div>
        </div>
    )
}

export default Orders;