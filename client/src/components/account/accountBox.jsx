import React,{ useEffect,useState } from 'react';
import { Avatar, TextField } from '@material-ui/core';
import useStyles from './styles.js';
import passwordValidator from 'password-validator';
import { updateProfile } from '../../actions/auth.js';
import { getToken } from '../../utils/common.js';
import { useDispatch } from 'react-redux';

const AccountBox = ({profile,edit,setEdit}) => {
    const classes = useStyles();
    const [editMode,setEditMode] = useState(edit);
    var ph = new passwordValidator();
    const dispatch = useDispatch();
    ph.is().has().digits(10).has().not().spaces().has().not().uppercase().has().not().lowercase().has().not().symbols();
    
    const [err,setErr] = useState(0);
    useEffect(()=> {
        setEditMode(edit);
    },[edit]);

    const [form,setForm] = useState({
        phone: profile.phone === 'Not Added' ? '':profile.phone,
        address: profile.address === 'Not Added' ? '':profile.address
    });

    const [phoneError,setPhoneError] = useState('');
    const [addressError,setAddressError] = useState('');

    useEffect(()=> {
        if(err === 1){
            setEdit(false);
            setEditMode(false);
            setErr(0);
        }
    },[err])

    const changeForm = (e) => {
        e.preventDefault();
        var {name,value} = e.target;

        setForm((prevVal)=> {
            return {...prevVal, [name]:value}
        });
    }

    const saveProfile = (e) => {
        e.preventDefault();
        if(profile.address !== 'Not Added'){
            if(form.address.trim() === ''){
                setAddressError('Address cant be Empty');
            }
        }
        if(profile.phone !== 'Not Added'){
            if(form.phone.trim() === ''){
                setPhoneError('Phone no. cant be empty');
            }
        }
        if(form.phone.trim() !== '' && form.address.trim() !== ''){
            if(!ph.validate(form.phone)){
                setPhoneError('Phone no. must contain 10 digits');
            }
            else{
            const res = dispatch(updateProfile(getToken().result.emailId,form));
            res.then((message)=> {setPhoneError(message); setErr(1)})
                .catch((err)=> setPhoneError(err));
            }
        }
    }

    const colors = ['blue','purple','orange','green','magenta'];
    const num = parseInt(profile.userName.charAt(0),36) - 9;

    const selectednum = num%5;
    return (
        <div className={classes.accountBox}>
            <div className={classes.upperAccount} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{fontSize:'2rem',borderBottom:'2px solid black',fontWeight:'bold'}}>My Profile</div> 
                <div><Avatar style={{backgroundColor:colors[selectednum]}}>{profile.userName.charAt(0)}</Avatar></div>
            </div>
            <div>
                <div className={classes.subAccountInfo}><strong>Name:</strong> {profile.userName}</div>
                <div className={classes.subAccountInfo}><strong>Email Id:</strong> {profile.emailId}</div>
                <div className={classes.subAccountInfo}><strong>Phone No.: </strong> {editMode ? <div>
                <input value={form.phone} onChange={changeForm} name="phone" id="phone" /> <span>{phoneError}</span> </div>
                : profile.phone}</div>
                <div className={classes.subAccountInfo}><strong>Address:</strong>{editMode ?  
                <div><input value={form.address} onChange={changeForm} name="address" id="address" /> <span>{addressError}</span></div> :
                profile.address}</div>
                <div className={classes.subAccountInfo}><strong>Joined Marca Scarpe on:</strong> {profile.timeStamp}</div>
                <div className={classes.subAccountInfo}><strong>Orders Done:</strong> {profile.orders.length}</div>
                {editMode && <button onClick={saveProfile}>Save Profile</button>}
            </div>
        </div>
    );
}

export default AccountBox;