export const getToken = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const getCartProducts = () => {
    var cart = JSON.parse(localStorage.getItem('CartItem'));
    if(!cart){
        return [];
    }
    else {
        return cart;
    }
}

export const addToCart = (product) => {
    var cart = JSON.parse(localStorage.getItem('CartItem'));
    if (!cart) {
        var newCart = [product];
        localStorage.setItem('CartItem', JSON.stringify(newCart));
        return 1;
    }
    else {
        const itemAlreadyExist = cart.filter((c) => c._id === product._id);
        if (itemAlreadyExist.length>0) {
            var num=0;
            for(var i=0;i<itemAlreadyExist.length;i++){
                if (itemAlreadyExist[i].size === product.size) {
                    if (itemAlreadyExist[i].productColor === product.productColor) {
                        num++;
                    }
                }
            }
            if(num!=0){
                return 0;
            }
            else {
                cart.push(product);
                localStorage.setItem('CartItem', JSON.stringify(cart));
                return 1;
            }
        }
        else {
            cart.push(product);
            localStorage.setItem('CartItem', JSON.stringify(cart));
            return 1;
        }
    }
}

export const getCartLength = () => {
    var cart = JSON.parse(localStorage.getItem('CartItem'));
    if (!cart) {
        return 0;
    }
    else {
        return cart.length;
    }
}

export const setQuantityAndPrice = (productId,quant) => {
    var cart = JSON.parse(localStorage.getItem('CartItem'));
    cart = cart.map((item)=> {
        if(item._id === productId){
            item.quantity = quant;
        }
        return item;
    });
    localStorage.setItem('CartItem', JSON.stringify(cart)); 
} 

export const removeFromCart = (productId,productSize,productColor) => {
    var cart = JSON.parse(localStorage.getItem('CartItem'));
    cart = cart.filter((item)=> {
        if(item._id === productId){
         if(item.size === productSize){
           if(item.productColor !== productColor)
            return item;
         }
         else return item;   
        }
        else{
            return item;
        } 
    });
    localStorage.setItem('CartItem', JSON.stringify(cart)); 
}