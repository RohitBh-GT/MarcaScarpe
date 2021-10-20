import React, { useEffect,useState } from 'react';
import { getToken } from '../../utils/common.js';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar.jsx';
import CoverPhoto from '../../components/CoverPhoto/coverPhoto.jsx';
import { getProfile } from '../../actions/profile.js';
import Brands from '../../components/Brands/brands.jsx';
import topbrands from '../../utils/constants/brands.js';
import DealsDay from '../../components/DealsDay/dealsday.jsx';
import GenderFootwear from '../../components/GenderFootwear/genderFootwear.jsx';
import { useSelector,useDispatch } from 'react-redux';
import './home.css';

const Home = () => {
    const history = useHistory();
    if (getToken() === null) {
        history.push('/auth/signUp');
    }
    const dispatch = useDispatch();

    useEffect(()=> {
        if(getToken())
          dispatch(getProfile(getToken()));
    },[dispatch]);

    const allShoes = useSelector((state) => state.shoes);
    const myProfile = useSelector((state) => state.profile);
    const [men,setMen] = useState([]);
    const [women,setWomen] = useState([]);
    const [kids,setKids] = useState([]);
    const [deals,setDeals] = useState([]);

    useEffect(()=> {
        const today = new Date().getDate();
        var ratio = Math.floor(today/3);
        setDeals(allShoes.filter((shoes,index) => index%ratio === 0 ))
        setMen(allShoes.filter((shoes)=> shoes.forGender === 'Men'));
        setWomen(allShoes.filter((shoes)=> shoes.forGender === 'Women'));
        setKids(allShoes.filter((shoes)=> shoes.forGender === 'Kids'));
    },[allShoes]);

    return (
        <div className="home_body">
            <Navbar />
            {myProfile.length > 0 && <CoverPhoto profile={myProfile[0]} />}
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