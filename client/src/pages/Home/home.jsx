import React, { useEffect,useState } from 'react';
import { getToken } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar.jsx';
import CoverPhoto from '../../components/CoverPhoto/coverPhoto.jsx';
import Brands from '../../components/Brands/brands.jsx';
import topbrands from '../../utils/constants/brands.js';
import DealsDay from '../../components/DealsDay/dealsday.jsx';
import GenderFootwear from '../../components/GenderFootwear/genderFootwear.jsx';
import { useSelector } from 'react-redux';
import './home.css';

const Home = () => {
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }

    const allShoes = useSelector((state) => state.shoes);
    const [men,setMen] = useState([]);
    const [women,setWomen] = useState([]);
    const [kids,setKids] = useState([]);

    useEffect(()=> {
        setMen(allShoes.filter((shoes)=> shoes.forGender === 'Men'));
        setWomen(allShoes.filter((shoes)=> shoes.forGender === 'Women'));
        setKids(allShoes.filter((shoes)=> shoes.forGender === 'Kids'));
    },[allShoes]);

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

    return (
        <div className="home_body">
            <Navbar />
            <CoverPhoto />
            {allShoes.length === 0 ? <h1>Loading...</h1>:<>
            <Brands brands={topbrands} />
            <DealsDay deals={deals} />
            <GenderFootwear gender="Men" shoes={men}/>
            <GenderFootwear gender="Women" shoes={women}/>
            <GenderFootwear gender="Kids" shoes={kids}/>
            </>
            }
        </div>
    )
}

export default Home;