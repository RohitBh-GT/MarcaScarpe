import * as api from '../api/api.js';

export const getProfile = (email) => async(dispatch) => {
    try {
        const {data} = await api.getMyProfile(email);
        dispatch({type:'GET_PROFILE',payload:data});
    } catch (error) {
        return (error.response.data.message);
    }
}