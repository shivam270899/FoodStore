import axios from 'axios';

export const getAllPizzas = () => async(dispatch) => {
    dispatch({type: 'GET_PIZZAS_REQUEST'});
    try{
        const response = await axios.get('/api/pizzas/getallpizzas');
        console.log(response);
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data});
    }
    catch(error){
        dispatch({type: 'GET_PIZZAS_FAIL', payload: error});
    }
} 

export const filterPizzas = (searchkey, category) => async(dispatch) => {
    dispatch({type: 'GET_PIZZAS_REQUEST'});
    try{
        var filteredPizza;
        const response = await axios.get('/api/pizzas/getallpizzas');
        filteredPizza = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchkey));
        if( category!='all'){
            filteredPizza = response.data.filter(pizza => pizza.category.toLowerCase()==category);
        }
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: filteredPizza});
    }
    catch(error){
        dispatch({type: 'GET_PIZZAS_FAIL', payload: error});
    }
} 

export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: 'ADD_PIZZA_REQUEST' });
    try {
        const response = await axios.post('/api/pizzas/addpizza', {pizza});
        dispatch({ type: 'ADD_PIZZA_SUCCESS' });
    }
    catch (error) {
        dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
    }
}

export const getPizzaByid = (pizzaid) => async(dispatch) => {
    dispatch({type: 'GET_PIZZA_DETAILS_REQUEST'});
    try{
        const response = await axios.post('/api/pizzas/getpizzabyid',{pizzaid})
        dispatch({type:'GET_PIZZA_DETAILS_SUCCESS', payload: response.data})
    }
    catch(error){
        dispatch({type:'GET_PIZZA_DETAILS_FAILED', payload: error})
    }
}

export const updatePizza = (editedPizza) => async (dispatch, getState) => {
    dispatch({ type: 'PIZZA_UPDATE_REQUEST' });
    try {
        const response = await axios.put('/api/pizzas/updatepizza',{editedPizza});
        dispatch({ type: 'PIZZA_UPDATE_SUCCESS' });
    }
    catch (error) {
        dispatch({ type: 'PIZZA_UPDATE_FAILED', payload: error });
    }
}

export const deletePizza = (pizzaid) => async(dispatch) => {
    dispatch({type: 'PIZZA_DELETE_REQUEST'});
    try{
        const response = await axios.post('/api/pizzas/deletepizza',{pizzaid})
        console.log(response);
        alert('Pizza Deleted Successfully')
        window.location.reload();
        dispatch({type: 'PIZZA_DELETE_SUCCESS'})
    }
    catch(error){
        alert('Something went wrong')
        dispatch({ type: 'PIZZA_DELETE_FAILED', payload: error });
    }
}