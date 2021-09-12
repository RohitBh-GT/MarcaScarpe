import React from 'react';
import Email from '../../components/authbox/email.jsx';
import './email.css';

const OnlyEmail = ({type}) => {
    return (
        <div className="email_body">
            <Email type={type} />
        </div>
    )
}

export default OnlyEmail;