import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartAction';
import Checkout from '../components/Checkout';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CartScreen() {
    AOS.init({duration: 500});
    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, items)=> x+items.price, 0)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center p-2" data-aos="fade-down">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                    {cartItems.map(item => {
                        return <div className="flex-container">
                            <div className="text-left m-1 w-100">
                                <h1>{item.name} [{item.varient}]</h1>
                                <h1>Price: {item.qty}*{item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{display:'inline'}}>Quantity:</h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.qty+1, item.varient))}}></i>
                                <b>{item.qty}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.qty-1, item.varient))}}></i>
                                <hr/>
                            </div>
                            <div className="m-1 w-100">
                                <img src={item.image} style={{height:'80px', width:'80px'}}></img>
                            </div>
                            <div className="m-1 w-100">
                            <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                            </div>
                        </div>
                    })}
                </div>
                <div className="col-md-4">
                    <h2 style={{fontSize:"30px"}}>SubTotal: {subtotal} /-</h2>
                    <Checkout subtotal={subtotal}></Checkout>
                </div>
            </div>
        </div>
    )
}