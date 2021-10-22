import axios from 'axios';

const url = 'http://localhost:5000';

export const signUpUser = (data) => axios.post(`${url}/auth/api/v1/signup`,data); 
export const signInUser = (data) => axios.post(`${url}/auth/api/v1/signin`,data); 
export const googleSignIn = (data) => axios.post(`${url}/auth/api/v1/googleLogin`,data);
export const forgotPassword = (data) => axios.post(`${url}/auth/api/v1/forgotPassword`,data);
export const resetPassword = (data) => axios.put(`${url}/auth/api/v1/resetPassword`,data);
export const updateAccount = (email,data) => axios.put(`${url}/auth/api/v1/updateAccount/${email}`,data); 


export const getAllShoes = () => axios.get(`${url}/brandshoes/api/v1/getProducts`);
export const addReview = (id,review) => axios.put(`${url}/brandshoes/api/v1/addReview/${id}`,review);

export const getMyProfile = (email) => axios.get(`${url}/profile/api/v1/getParticularProfile/${email}`);
export const addWishlistItem = (email,wishListData) => axios.put(`${url}/profile/api/v1/updateWishlist/${email}`,wishListData);
export const removeWishlistItem = (email,wishListData) => axios.put(`${url}/profile/api/v1/removeWishlistItem/${email}`,wishListData);

export const addOrders = (email,data) => axios.put(`${url}/profile/api/v1/addOrders/${email}`,data);