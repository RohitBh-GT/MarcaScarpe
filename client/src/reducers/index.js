import {combineReducers} from 'redux';
import auth from './auth.js';
import shoes from './shoes.js';
import profile from './profile.js';

export const reducers = combineReducers({auth,shoes,profile});