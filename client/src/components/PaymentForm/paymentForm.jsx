import React,{ useState,useEffect } from 'react';
import './styles.css';
import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js';
import { getCartProducts,getToken } from '../../utils/common';
import { useDispatch } from 'react-redux';
import { placeOrder,addOrders } from '../../actions/profile.js';
import { CircularProgress } from '@material-ui/core';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fe6b02",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#fe6b02" }
		},
		invalid: {
			iconColor: "#fe6b02",
			color: "#fe6b02"
		}
	}
}

const PaymentForm = ({activeStep,setActiveStep,setPaymentError,address}) => {

    const [success,setSuccess] = useState(false);
    const stripe = useStripe();
    const element = useElements();
    const [loading,setLoading] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);
    const [cartBox,setCartBox] = useState(getCartProducts());
    const [error,setError] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        var total = 0;
        for (var i = 0; i < cartBox.length; i++) {
            total = Number(total) + Number((cartBox[i].productDiscountPrice.slice(1).replace(/,/g, '') * cartBox[i].quantity).toFixed(2));
        }
        setTotalPrice(total);
    }, []);

    const handlePayment = async(e) => {
        setLoading(true);
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: element.getElement(CardElement)
        });
        if(!error) {
            const {id} = paymentMethod;
            const res = dispatch(placeOrder({amount: totalPrice*100,id}));
            res.then((msg) => {setPaymentError(false); setLoading(false);
                dispatch(addOrders({email:getToken().result.emailId,order:{products:getCartProducts(),totalPrice:`Rs ${totalPrice}`,address:address,dateOfOrder:new Date().toLocaleDateString()}}));
                setActiveStep(activeStep+1);
              const newCart = [];
              localStorage.setItem("CartItem",JSON.stringify(newCart));
            })
            .catch((err)=> {setPaymentError(true); setLoading(false)});
        }
        else{
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <div className='paymentdiv'>
        {!success ? <form>
            <fieldset>
                <div>
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            {error!=='' && <span style={{color:'#fe6b02'}}>{error}</span>}
            <button className='payButton' onClick={handlePayment}>Pay Money</button>
        </form> : <h1>Payment Done</h1>}
        {loading && <CircularProgress className='spinner' />}
        </div>
    );
}

export default PaymentForm;