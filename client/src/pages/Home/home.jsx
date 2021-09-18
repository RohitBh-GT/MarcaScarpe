import React from 'react';
import { getToken } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar.jsx';
import CoverPhoto from '../../components/CoverPhoto/coverPhoto.jsx';
import Brands from '../../components/Brands/brands.jsx';
import topbrands from '../../utils/constants/brands.js';
import DealsDay from '../../components/DealsDay/dealsday.jsx';
import './home.css';

const Home = () => {
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }

    const deals = [{
        productName:'XYZxnscm',
        productImage:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-shoe-dNWPTj.png',
        roductPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-shoe-dNWPTj.png',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-shoe-dNWPTj.png',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-shoe-dNWPTj.png',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },
    {
        productName:'XYZxnscm',
        productImage:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-shoe-dNWPTj.png',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    },{
        productName:'XYZxnscm',
        productImage:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-shoe-dNWPTj.png',
        productPrice:'Rs 1200',
        productDiscountPrice:'Rs 999'
    }];

    return (
        <div className="home_body">
            <Navbar />
            <CoverPhoto />
            <Brands brands={topbrands} />
            <DealsDay deals={deals} />
        </div>
    )
}

export default Home;