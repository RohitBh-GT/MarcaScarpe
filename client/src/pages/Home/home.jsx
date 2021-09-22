import React from 'react';
import { getToken } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar.jsx';
import CoverPhoto from '../../components/CoverPhoto/coverPhoto.jsx';
import Brands from '../../components/Brands/brands.jsx';
import topbrands from '../../utils/constants/brands.js';
import DealsDay from '../../components/DealsDay/dealsday.jsx';
import GenderFootwear from '../../components/GenderFootwear/genderFootwear.jsx';
import './home.css';

const Home = () => {
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }

    const deals = [{
        productName:'XYZxnscm',
        productImage:'https://m.media-amazon.com/images/I/51aymyMDz9L._UX695_.jpg',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://m.media-amazon.com/images/I/81RYy2zYD+S._AC_UL480_FMwebp_QL65_.jpg',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://m.media-amazon.com/images/I/81RYy2zYD+S._AC_UL480_FMwebp_QL65_.jpg',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://m.media-amazon.com/images/I/81RYy2zYD+S._AC_UL480_FMwebp_QL65_.jpg',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },
    {
        productName:'XYZxnscm',
        productImage:'https://m.media-amazon.com/images/I/81RYy2zYD+S._AC_UL480_FMwebp_QL65_.jpg',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://m.media-amazon.com/images/I/81RYy2zYD+S._AC_UL480_FMwebp_QL65_.jpg',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    }];
    const men = deals;
    const women = deals;
    const kids = deals;

    return (
        <div className="home_body">
            <Navbar />
            <CoverPhoto />
            <Brands brands={topbrands} />
            <DealsDay deals={deals} />
            <GenderFootwear gender="Men" products={men} />
            <GenderFootwear gender="Women" products={women} />
            <GenderFootwear gender="Kids" products={kids} />
        </div>
    )
}

export default Home;