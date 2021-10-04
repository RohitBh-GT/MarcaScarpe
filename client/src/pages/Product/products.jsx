import React,{useEffect, useState} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/navbar.jsx';
import './styles.css';

const Product = () => {
    const location = useLocation();
    const { productId,productName } = queryString.parse(location.search,{
        ignoreQueryPrefix:true
    });

    const allShoes = useSelector((state) => state.shoes);
    const [product,setProduct] = useState(allShoes.filter((shoe)=> shoe._id === productId));

    useEffect(()=> {
        setProduct(allShoes.filter((shoe)=> shoe._id === productId))
    },[allShoes]);

    return (
        <>
        <Navbar />
        <h1>Product Page</h1>
        {product.length!==0 && <p>{product[0].productName}</p>}
        </>
    )
}

export default Product;