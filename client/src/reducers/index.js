import {combineReducers} from 'redux';
import auth from './auth.js';
import shoes from './shoes.js';

export const reducers = combineReducers({auth,shoes});