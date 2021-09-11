import React from 'react';
import AuthBox from '../../components/authbox/authbox.jsx';
import './auth.css';

const Auth = ({type,setToken}) => {
    return (
        <div className="auth_body">
            <AuthBox type={type} setToken={setToken} />
        </div>
    )
}

export default Auth;