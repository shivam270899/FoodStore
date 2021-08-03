import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const response = await axios.post('/api/orders/placeorder', { token, subtotal, currentUser, cartItems })
        dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
    }
}

export const getUserOrders = () => async (dispatch, getState) => {

    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({ type: 'USER_ORDERS_REQUEST' });

    try {
        const response = await axios.post('/api/orders/userorders', { userid: currentUser._id })
        dispatch({ type: 'USER_ORDERS_SUCCESS', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'USER_ORDERS_FAILED', payload: error });
    }
}

export const getAllOrders = () => async(dispatch) => {
    dispatch({type: 'ALL_ORDERS_REQUEST'})
    try{
        const response = await axios.post('/api/orders/allorders');
        dispatch({type: 'ALL_ORDERS_SUCCESS', payload: response.data})
    }
    catch(error){
        dispatch({ type: 'ALL_ORDERS_FAILED', payload: error });
    }
}

export const deliver = (orderid) => async(dispatch) => {
    
    try{
        const response = await axios.post('/api/orders/deliver',{orderid})
        console.log(response);
        alert('Order Delivered');
        const orders = await axios.post('/api/orders/allorders')
        dispatch({type: 'ALL_ORDERS_SUCCESS', payload: orders.data})
    }
    catch(error){
        console.log(error);
    }
}