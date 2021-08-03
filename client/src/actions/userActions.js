import axios from 'axios';

export const registerUsers = (user) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        const response = await axios.post('/api/users/register', user);
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
    }
    catch (error) {
        dispatch({ type: 'USER_REGISTER_FAIL', payload: error });
    }
}

export const loginUsers = (user) => async (dispatch) => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
        const response = await axios.post('/api/users/login', user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/'
    }
    catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error });
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems')
    window.location.href = '/login'
}

export const userProfile = (user) => async (dispatch, getState) => {
    dispatch({ type: 'USER_PROFILE_UPDATE_REQUEST' });
    try {
        const response = await axios.put('/api/users/updateprofile',user);
        dispatch({ type: 'USER_PROFILE_UPDATE_SUCCESS' });
        localStorage.setItem('currentUser', JSON.stringify(response.data));
    }
    catch (error) {
        dispatch({ type: 'USER_PROFILE_UPDATE_FAIL', payload: error });
    }
}

export const userDetails = (userId) => async (dispatch, getState) => {
    dispatch({ type: 'USER_DETAILS_REQUEST' });
    try {
        const response = await axios.get(`/api/users/${userId}`);
        dispatch({ type: 'USER_DETAILS_SUCCESS', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'USER_DETAILS_FAILED', payload: error });
    }
}

export const getAllUsers = () => async(dispatch) => {
    dispatch({type:'GET_ALL_USERS_REQUEST'})
    try{
        const response = await axios.post('/api/users/getallusers');
        dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: response.data });
    }
    catch(error){
        dispatch({ type: 'GET_ALL_USERS_FAILED', payload: error });
    }
}

export const deleteUser = (userid) => async(dispatch) => {
    dispatch({type:'DELETE_USER_REQUEST'})
    try{
        const response = await axios.post('/api/users/deleteuser', {userid})
        alert('User Deleted Successfully')
        window.location.reload();
        dispatch({type:'DELETE_USER_SUCCESS'})
        
    }
    catch(error){
        alert('Something went wrong')
        dispatch({type:'DELETE_USER_FAILED', payload: error})
    }
}



