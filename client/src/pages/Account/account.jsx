import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AccountBox from '../../components/account/accountBox.jsx';
import './styles.css';
import Footer from '../../components/Footer/footer.jsx';

const Account = () => {
    const myProfile = useSelector((state) => state.profile);
    const [prof,setProf] = useState([]);
    const [edit,setEdit] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=> {
        console.log(myProfile);
        setProf(myProfile);
    },[myProfile]);

    const editProfile = () => {
        if(!edit)
         setEdit(true);
    }

    const logOut = () => {
        dispatch({type:'LOGOUT'});
        history.push('/auth/signIn')
    }

    return (
        <div className='accountPage'>
            <Navbar />
            {prof.length>0 && <div className='account'>
                <div className='accountBox'>
                    <AccountBox profile={prof[0]} edit={edit} setEdit={setEdit} />
                </div>
                <div className='accountButtons'>
                    <button onClick={editProfile} className='fourButtons'>Edit Profile</button>
                    <button className='fourButtons'>Rewarded Cash: {prof[0].rewardedCash}</button>
                    <button className='fourButtons'>Gift Vouchers Won: {prof[0].giftVouchers}</button>
                    <button onClick={logOut} className='fourButtons'>Log Out</button>
                </div>
            </div>}
            <Footer />
        </div>
    )
}

export default Account;