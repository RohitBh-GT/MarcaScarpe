const auth = (users={authdata:null},action) => {
    switch(action.payload){
      case 'fetch':
          return users;
      default:
          return users;    
    }     
}

export default auth;