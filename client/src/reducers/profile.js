const profile = (myProfile=[],action) => {
    switch(action.type){
        case 'GET_PROFILE':
            return action.payload;
        default:
            return myProfile;    
    }
}

export default profile;