export const getToken = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const getCartProducts = () => {
    var cart = JSON.parse(sessionStorage.getItem('CartItem'));
    if(!cart){
        return [];
    }
    else {
        return cart;
    }
}

export const addToCart = (product) => {
    var cart = JSON.parse(sessionStorage.getItem('CartItem'));
    if (!cart) {
        var newCart = [product];
        sessionStorage.setItem('CartItem', JSON.stringify(newCart));
        return 1;
    }
    else {
        const itemAlreadyExist = cart.find((c) => c._id === product._id);
        if (itemAlreadyExist) {
            if (itemAlreadyExist.size === product.size) {
                if (itemAlreadyExist.productColor === product.productColor) {
                    return 0;
                }
                else {
                    cart.push(product);
                    sessionStorage.setItem('CartItem', JSON.stringify(cart));
                    return 1;
                }
            }
            else if (itemAlreadyExist.size !== product.size) {
                cart.push(product);
                sessionStorage.setItem('CartItem', JSON.stringify(cart));
                return 1;
            }
        }
        else {
            cart.push(product);
            sessionStorage.setItem('CartItem', JSON.stringify(cart));
            return 1;
        }
    }
}

export const getCartLength = () => {
    var cart = JSON.parse(sessionStorage.getItem('CartItem'));
    if (!cart) {
        return 0;
    }
    else {
        return cart.length;
    }
}