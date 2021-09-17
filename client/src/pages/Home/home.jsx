import React from 'react';
import { getToken } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar.jsx';
import CoverPhoto from '../../components/CoverPhoto/coverPhoto.jsx';
import Brands from '../../components/Brands/brands.jsx';
import topbrands from '../../utils/constants/brands.js';
import './home.css';

const Home = () => {
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }
    return (
        <div className="home_body">
            <Navbar />
            <CoverPhoto />
            <Brands brands={topbrands} />
        </div>
    )
}

export default Home;