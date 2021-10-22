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
        case 'ADD_ORDERS':
            var oldProf = myProfile[0];
            oldProf.orders.push(action.payload);  
            return [oldProf];   
        case 'UPDATE_PROFILE':
            var oldProf = myProfile[0];
            oldProf.phone = action.payload.phone;
            oldProf.address = action.payload.address;
            return [oldProf];        
        default:
            return myProfile;    
    }
}

export default profile;