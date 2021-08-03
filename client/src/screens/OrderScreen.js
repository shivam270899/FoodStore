import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OrderScreen() {
    AOS.init();
    const orderstate = useSelector(state => state.getUserOrdersReducer);
    const { loading, error, userOrder } = orderstate;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    return (
        <div>
            <h1 style={{ fontSize: '35px' }}>My Orders</h1>
            <br/>
            <div className="row justify-content-center" data-aos="zoom-in">
                {loading && (<Loading />)}
                {error && (<Error error='something went wrong' />)}
                {userOrder && userOrder.map((order) => {
                    return <div className="col-md-8 m-2 p-1"  style={{background:'#017890', color:'white'}}>
                        <div className="flex-container">
                            <div>
                                <h1 style={{ fontSize: '25px' }}>Items</h1>
                                <hr/>
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name} [{item.varient}] * {item.qty} =  {item.price}</p>
                                    </div>
                                })}
                            </div>
                            <div>
                                <h1 style={{ fontSize: '25px' }}>Address</h1>
                                <hr/>
                                <p>Street: {order.shippingAddress.street}</p>
                                <p>City: {order.shippingAddress.city}</p>
                                <p>Country: {order.shippingAddress.country}</p>
                                <p>PinCode: {order.shippingAddress.pincode}</p>
                            </div>
                            <div>
                            <h1 style={{ fontSize: '25px' }}>Order Info</h1>
                            <hr/>
                            <p>Order Amount: {order.orderAmount}</p>
                            <p>Date: {order.createdAt.substring(0,10)}</p>
                            <p>Transaction Id: {order.transactionId}</p>
                            <p>Order Id: {order._id}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}