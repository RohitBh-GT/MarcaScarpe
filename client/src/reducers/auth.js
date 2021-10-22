const auth = (users={authData:null},action) => {
    switch(action.type){
      case 'signup':
        localStorage.setItem('user',JSON.stringify({...action?.payload})) 
        return {...users,authData:action?.payload};   
      case 'signin':  
        localStorage.setItem("user",JSON.stringify({...action?.payload}));
        return {...users,authData:action?.payload}; 
      case 'UPDATE_ACCOUNT':
        const obj = {result:action?.payload};
        localStorage.setItem("user",JSON.stringify(obj));
        return {authData:obj}; 
      case 'LOGOUT':
          localStorage.clear();
          return {...users,authData:null};  
      default:
          return users;    
    }     
}

export default auth;