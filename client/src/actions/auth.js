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