import React from 'react';
import { Switch,Route,withRouter } from 'react-router-dom';
import Auth from './pages/Auth/auth.jsx';

const App = () =>{
    return (
        <>
         <Switch>
             <Route path="/signIn" component={Auth} /> 
         </Switch>
        </>
     );
}

export default withRouter(App);