import * as api from '../api/api.js';

export const getProfile = (token) => async(dispatch) => {
    try {
        const {data} = await api.getMyProfile(token.result.emailId);
        dispatch({type:'GET_PROFILE',payload:data});
    } catch (error) {
        return (error.response.data.message);
    }
}

export const updateWishList = (obj) => async(dispatch) => {
    try {
        const {data} = await api.addWishlistItem(obj.email,obj.wishListItem);
        dispatch({type:'ADD_WISHLIST',payload:data});
    } catch (error) {
        return (error.response.data.message);
    }
}

export const removeWishItem = (obj) => async(dispatch) => {
    try {
        console.log(obj);
        const {data} = await api.removeWishlistItem(obj.email,obj.wishListItem);
        console.log(data);
        dispatch({type:'REMOVE_WISH',payload:data});
    } catch (error) {
        return (error.response.data.message);
    }
}