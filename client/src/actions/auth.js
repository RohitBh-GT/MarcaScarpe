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
        setTimeout(()=> {
            history.push('/auth/signIn');
        },[10000]);
        return (data.message);
    } catch (error) {
        return (error.response.data.message);
    }
}

export const resetPass = (user,history) => async(dispatch) => {
    try {
        const userChanged = {id:user.id,token:user.token,password:user.password};
        const {data} = await api.resetPassword(userChanged);
        setTimeout(()=> {
            history.push('/auth/signIn');
        },[5000]);
        return (data.message);
    } catch (error) {
        return (error.response.data.message);
    }
}