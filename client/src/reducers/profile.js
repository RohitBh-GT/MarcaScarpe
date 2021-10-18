const profile = (myProfile=[],action) => {
    switch(action.type){
        case 'GET_PROFILE':
            return action.payload;
        case 'ADD_WISHLIST':
            var oldProf = myProfile[0];
            oldProf.wishlist.push(action.payload);
            return [oldProf]; 
        case 'REMOVE_WISH':
            var oldProf = myProfile[0];
            oldProf.wishlist.filter((wish) => wish.productName !== action.payload.productName);
            return [oldProf];       
        default:
            return myProfile;    
    }
}

export default profile;