import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import { useSelector } from 'react-redux';
import './styles.css';
import WishList from '../../components/wishListItem/wishlistItem.jsx';
import Footer from '../../components/Footer/footer.jsx';

const Wishlist = () => {
    const myProfile = useSelector((state) => state.profile);
    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(myProfile);
    }, [myProfile]);

    return (
        <div className='wishListPage'>
            <Navbar />
            {prof.length > 0 && <div className='wishListDiv'>
                <h2 className='wishListHead'>My Wishlist ({prof[0].wishlist.length})</h2>
                <WishList profile={prof[0]} setProf={setProf} />
            </div>}
            <Footer />
        </div>
    );
}

export default Wishlist;