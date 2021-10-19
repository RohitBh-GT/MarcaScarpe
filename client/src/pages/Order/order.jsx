import React, { useState,useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import { useSelector } from 'react-redux';
import './styles.css';

const Orders = () => {
    const myProfile = useSelector((state) => state.profile);
    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(myProfile);
    }, [myProfile]);

    return (
        <div className='orderPage'>
            <Navbar />
            <div className='orders'>
                {prof.length > 0 && <div>
                    {prof[0].orders.map((order) => (
                        <>
                        {order.products.map((product)=> (
                            <h1>{product.productName}</h1>
                        ))}
                        <hr style={{color:'red'}} />
                        </>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Orders;