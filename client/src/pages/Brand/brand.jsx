import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/navbar.jsx';
import brands from '../../utils/constants/brands.js';

const Brand = () => {
    const location = useLocation();
    const { brandName } = queryString.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const img = brands.filter((brand)=> brand.brandName === brandName);

    return (
        <div className='brandPage'>
            <Navbar />
            <img src={img[0].coverImg} alt={brandName} width="100%" />
        </div>
    );
}

export default Brand;