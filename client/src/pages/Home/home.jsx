import React from 'react';
import { getToken } from '../../utils/common.js';
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    if(getToken() === null){
        history.push('/auth/signUp');
    }
    return (
        <h1>Home Page</h1>
    )
}

export default Home;