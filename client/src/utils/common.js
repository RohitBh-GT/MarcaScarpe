export const getToken = () => {
    return JSON.parse(localStorage.getItem('user'));
} 

export const addToCart = (product) => {
    var cart = JSON.parse(sessionStorage.getItem('CartItem'));
    if(!cart){
        var newCart = [product];
        sessionStorage.setItem('CartItem',JSON.stringify(newCart));
        return 1;
    }
    else{
        const itemAlreadyExist = cart.find((c) => c._id === product._id);
        if(itemAlreadyExist) return 0;
        else {
            cart.push(product);
            sessionStorage.setItem('CartItem',JSON.stringify(cart));
            return 1;
        }
    }
}