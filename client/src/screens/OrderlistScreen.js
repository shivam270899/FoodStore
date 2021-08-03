import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, deliver } from '../actions/orderAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OrderlistScreen(){

    AOS.init();

    const dispatch = useDispatch()
    const ordersstate = useSelector(state => state.getAllOrdersReducer)
    const {loading, success, error, orders} = ordersstate

    useEffect(() => {
        dispatch(getAllOrders());
    },[])

    return (
        <div>
            <br/>
            <h1>Order List</h1>
            <br/>
            {loading && (<Loading/>)}
            {error && (<Error error='something went wrong'/>)}
            <div>
                <table className="table table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded table-responsive-sm" data-aos="zoom-in">
                <thead  className="thead-dark">
                    <tr>
                        <td style={{fontSize:'15px'}}>Order Id</td>
                        <td style={{fontSize:'15px'}}>UserName</td>
                        <td style={{fontSize:'15px'}}>Email</td>
                        <td style={{fontSize:'15px'}}>Amount</td>
                        <td style={{fontSize:'15px'}}>Date</td>
                        <td style={{fontSize:'15px'}}>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map((order) => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td>
                                {order.isDelivered ? (<p>Delivered</p>) : <button className="btn" onClick={() => {dispatch(deliver(order._id))}}>Deliver</button>}
                            </td>
                        </tr>
                    })}
                </tbody>
                </table>
            </div>
        </div>
    )
}