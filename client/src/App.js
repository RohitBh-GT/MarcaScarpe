import React, {useState,useEffect} from 'react';
import { Switch,Route,withRouter } from 'react-router-dom';
import Auth from './pages/Auth/auth.jsx';
import Home from './pages/Home/home.jsx';

const App = () =>{

    return (
        <>
         <Switch>
             <Route path="/auth/signIn">
                 <Auth type={'signin'} />    
             </Route> 
             <Route path="/auth/signUp">
                 <Auth type={'signup'} />    
             </Route> 
             <Route path="/" component={Home} />
         </Switch>
        </>
     );
}

export default withRouter(App);