import React, { useEffect, useState } from 'react';
import { Box, Stepper, Step, StepLabel, InputBase,Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getCartLength } from '../../utils/common';
import Navbar from '../../components/Navbar/navbar';
import ConfirmOrder from '../../components/confirmOrder/confirmOrder.jsx';
import './styles.css';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../../components/PaymentForm/paymentForm';

const steps = [
    'Select your Address',
    'Confirm your order',
    'Pay Money',
];

const PUBLIC_KEY = 'pk_test_51Jnye5SJqfr4g0SyhCDntFWzZsxnXeW6NGEtTB5pf7ShlhSxkxr4rjkImaQwMqbGoDamv6ac8exrdIFhGjckIEJT00bFLbzzvY';
const stripePromise = loadStripe(PUBLIC_KEY);

const PlaceOrder = () => {
    const history = useHistory();
    const [activeStep, setActiveStep] = useState(0);
    const [address, setAddress] = useState('');
    const [paymentError,setPaymentError] = useState(false);

    const myProfile = useSelector((state) => state.profile);

    useEffect(() => {
        if (getCartLength() === 0) {
            history.push('/your-cart');
        }
    }, [])

    useEffect(() => {
        if (myProfile.length > 0)
            setAddress(myProfile[0].address);
    }, [myProfile])

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const confirmAddress = (e) => {
        e.preventDefault();
        setActiveStep(activeStep+1);
    }

    return (
        <div className='placeOrderPage'>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                <Box className='stepbox' sx={{ width: '50%' }}>
                    <Stepper className='stepbox' activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step className='stepCircle' key={label}>
                                <StepLabel disabled style={{ color: 'red !important' }} className='stepLabel'>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
            {activeStep === 0 && <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                <InputBase
                    className='addressInput'
                    name="address"
                    variant="outlined"
                    required
                    value={address}
                    onChange={handleAddress}
                    id="address"
                    autoFocus
                />
                <Button
                    type="submit"
                    variant="contained"
                    className='submitAddress'
                    onClick={confirmAddress}
                >
                    Confirm Address
                </Button>
            </div>}
            {activeStep === 1 && <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                <ConfirmOrder activeStep={activeStep} setActiveStep={setActiveStep} />
            </div>}
            {activeStep === 2 && <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm activeStep={activeStep} setActiveStep={setActiveStep} setPaymentError={setPaymentError} address={address} />
                </Elements>
            </div>}
            {activeStep === 3 && <div>
                paymentError? <h2>Transaction Failed, Payment Unsuccessful</h2> : 
                <h2>Payment was Done successfully.Thank for giving order. You can check order log now.</h2>
             </div>}
        </div>
    );
}

export default PlaceOrder;