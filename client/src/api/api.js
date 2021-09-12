import axios from 'axios';

const url = 'http://localhost:5000';

export const signUpUser = (data) => axios.post(`${url}/auth/api/v1/signup`,data); 
export const signInUser = (data) => axios.post(`${url}/auth/api/v1/signin`,data); 
export const googleSignIn = (data) => axios.post(`${url}/auth/api/v1/googleLogin`,data);
export const forgotPassword = (data) => axios.post(`${url}/auth/api/v1/forgotPassword`,data);