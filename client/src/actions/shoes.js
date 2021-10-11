import * as api from '../api/api.js';

export const getAllShoes = () => async(dispatch) => {
    try {
        const {data} = await api.getAllShoes();
        dispatch({type:'GET_ALL_SHOES',payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const addReview = (id,review) => async(dispatch) => {
    try {
        const {data} = await api.addReview(id,review);
        dispatch({type:'UPDATE_REVIEW',payload:data});
    } catch (error) {
        console.log(error);
    }
}