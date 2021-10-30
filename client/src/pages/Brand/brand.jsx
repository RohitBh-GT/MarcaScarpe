import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/navbar.jsx';
import brands from '../../utils/constants/brands.js';
import BrandGrid from '../../components/BrandGrid/brandGrid.jsx';
import Footer from '../../components/Footer/footer.jsx';
import './styles.css';

const Brand = () => {
    const location = useLocation();
    const { brandName } = queryString.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const allShoes = useSelector((state) => state.shoes)
    const [sameBrands, setSameBrands] = useState([]);
    const img = brands.filter((brand) => brand.brandName === brandName);

    useEffect(() => {
        setSameBrands(allShoes.filter((shoe) => shoe.productBrand === brandName));
    }, [allShoes]);

    return (
        <div className='brandPage'>
            <Navbar />
            <div className="brandCover">
                <img src={img[0].coverImg} alt={brandName} width="100%" height="85%" />
            </div>
            <BrandGrid brands={sameBrands} />
            <Footer />
        </div>
    );
}

export default Brand;