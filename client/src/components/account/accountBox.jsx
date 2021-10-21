import React,{ useEffect,useState } from 'react';
import { Avatar, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const AccountBox = ({profile,edit,setEdit}) => {
    const classes = useStyles();
    const [editMode,setEditMode] = useState(edit);
    useEffect(()=> {
        setEditMode(edit);
    },[edit]);

    const [form,setForm] = useState({
        phone: profile.phone === 'Not Added' ? '':profile.phone,
        address: profile.address === 'Not Added' ? '':profile.address
    });

    const changeForm = (e) => {
        e.preventDefault();
        var {name,value} = e.target;

        setForm((prevVal)=> {
            return {...prevVal, [name]:value}
        });
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
                <div className={classes.subAccountInfo}><strong>Phone No.: </strong> {editMode ? 
                <input value={form.phone} onChange={changeForm} name="phone" id="phone" />
                : profile.phone}</div>
                <div className={classes.subAccountInfo}><strong>Address:</strong>{editMode ?  
                <input value={form.address} onChange={changeForm} name="address" id="address" /> :
                profile.address}</div>
                <div className={classes.subAccountInfo}><strong>Joined Marca Scarpe on:</strong> {profile.timeStamp}</div>
                <div className={classes.subAccountInfo}><strong>Orders Done:</strong> {profile.orders.length}</div>
                {editMode && <button>Save Profile</button>}
            </div>
        </div>
    );
}

export default AccountBox;