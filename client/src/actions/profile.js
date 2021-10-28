import * as api from '../api/api.js';

export const getProfile = (token) => async(dispatch) => {
    console.log(token.result.emailId);
    try {
        const {data} = await api.getMyProfile(token.result.emailId);
        console.log(data);
        dispatch({type:'GET_PROFILE',payload:data});
    } catch (error) {
        return (error);
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
        const {data} = await api.removeWishlistItem(obj.email,obj.wishListItem);
        dispatch({type:'REMOVE_WISH',payload:data});
    } catch (error) {
        return (error.response.data.message);
    }
}

export const addOrders = (obj) => async(dispatch) => {
    try {
        const {data} = await api.addOrders(obj.email,obj.order);
        dispatch({type:'ADD_ORDERS',payload:data});
    } catch (error) {
        return (error.response.data.message);
    }
}

export const placeOrder = (obj) => async(dispatch) => {
    try {
        const {data} = await api.placeOrder(obj);
        return data.message;
    } catch (error) {
        return (error.response.data.message);
    }
}