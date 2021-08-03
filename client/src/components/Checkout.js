import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Checkout({ subtotal }) {
    const dispatch = useDispatch();

    const orderstate = useSelector(state => state.placeOrderReducer)
    const { loading, success, error } = orderstate;

    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal));
    }
    return (
        <div>
            {loading && <Loading />}
            {error && <Error error='Something Went Wrong'/>}
            {success && <Success success='Your Order Placed Successfully'/>}
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                currency='INR'
                stripeKey='pk_test_51IgTCYSGBz8MfHu6NFcDyJclMNMuT2VRJo5QUGnpZOpILct5ISymThTkq7esrZXRpGMfV0CHmdpg5Mva6Hv5s3Pg00ncEVE5ju'
            >
                <button className="btn">Pay Now</button>
            </StripeCheckout>
        </div>
    )
}