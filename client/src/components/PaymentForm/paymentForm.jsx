import React,{ useState,useEffect } from 'react';
import './styles.css';
import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js';
import { getCartProducts } from '../../utils/common';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../actions/profile.js';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {

    const [success,setSuccess] = useState(false);
    const stripe = useStripe();
    const element = useElements();

    const [totalPrice, setTotalPrice] = useState(0);
    const [cartBox,setCartBox] = useState(getCartProducts());
    const dispatch = useDispatch();

    useEffect(() => {
        var total = 0;
        for (var i = 0; i < cartBox.length; i++) {
            total = Number(total) + Number((cartBox[i].productDiscountPrice.slice(1).replace(/,/g, '') * cartBox[i].quantity).toFixed(2));
        }
        setTotalPrice(total);
    }, []);

    const handlePayment = async(e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: element.getElement(CardElement)
        });
        if(!error) {
            const {id} = paymentMethod;
            const res = dispatch(placeOrder({amount: totalPrice,id}));
            res.then((msg) => console.log(msg))
            .catch((err)=> console.log(err));
        }
        else{
            console.log(error);
        }
    }

    return (
        <>
        {!success ? <form>
            <fieldset>
                <div>
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button onClick={handlePayment}>Pay Money</button>
        </form> : <h1>Payment Done</h1>}
        </>
    );
}

export default PaymentForm;