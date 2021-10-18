import React, {useState,useEffect} from 'react';
import { Switch,Route,withRouter } from 'react-router-dom';
import Auth from './pages/Auth/auth.jsx';
import Home from './pages/Home/home.jsx';
import OnlyEmail from './pages/OnlyEmail/onlyEmail.jsx';
import NewPassword from './pages/NewPassword/newPassword.jsx';
import Product from './pages/Product/products.jsx';
import Brand from './pages/Brand/brand.jsx';
import WishList from './pages/Wishlist/wishlist.jsx';
import { useDispatch } from 'react-redux';
import { getAllShoes } from './actions/shoes.js';
import { getProfile } from './actions/profile.js';
import { getToken } from './utils/common.js';
import Cart from './pages/Cart/cart.jsx';

const App = () =>{

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllShoes());
        if(getToken())
          dispatch(getProfile(getToken()));
    },[dispatch]);

    return (
        <>
         <Switch>
             <Route path="/auth/signIn">
                 <Auth type={'signin'} />    
             </Route> 
             <Route path="/auth/signUp">
                 <Auth type={'signup'} />    
             </Route> 
             <Route path="/auth/forgotPassword" component={OnlyEmail} />
             <Route path="/auth/resetPassword/:id/:token" component={NewPassword} />
             <Route path="/product" component={Product} />
             <Route path="/brand" component={Brand} />
             <Route path="/your-cart" component={Cart} />
             <Route path="/your-wishlist" component={WishList} />
             <Route path="/" component={Home} />
         </Switch>
        </>
     );
}

export default withRouter(App);