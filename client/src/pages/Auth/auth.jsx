import React from 'react';
import AuthBox from '../../components/authbox/authbox.jsx';
import './auth.css';

const Auth = ({type}) => {
    return (
        <div className="auth_body">
            <AuthBox type={type} />
        </div>
    )
}

export default Auth;