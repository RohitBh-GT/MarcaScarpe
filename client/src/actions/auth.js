import { ChangeHistoryOutlined } from '@material-ui/icons';
import * as api from '../api/api.js';

export const signUp = (user,history) => async(dispatch) => {
    try {
        const {data} = await api.signUpUser(user);
        dispatch({type:'signup',payload:data});
        history.push('/');
    } catch (error) {
        return (error.response.data.message);
    }
}

export const signIn = (user,history) => async(dispatch) => {
    try {
        const {data} = await api.signInUser(user);
        dispatch({type:'signin',payload:data});
        history.push('/');
    } catch (error) {
        return (error.response.data.message);
    }
}

export const GoogleSignIn = (user,history) => async(dispatch) => {
    try {
        const userData = {firstName:user.givenName,lastName:user.familyName,emailId:user.email,password:user.email+user.googleId};
        const {data} = await api.googleSignIn(userData);
        dispatch({type:'signin',payload:data});
        history.push('/');
    } catch (error) {
        return (error.response.data.message);
    }
}

export const forgotPass = (user,history) => async(dispatch) => {
    try {
        const {data} = await api.forgotPassword(user);
        history.push('/auth/signIn');
        return (data);
    } catch (error) {
        return (error.response.data.message);
    }
}