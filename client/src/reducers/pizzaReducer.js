export const getAllPizzasReducers = (state = { pizzas: []}, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'GET_PIZZAS_SUCCESS':
            return {
                loading: false,
                pizzas: action.payload
            }
        case 'GET_PIZZAS_FAIL':
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}

export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_REQUEST':
            return {
                loading: true,
            }
        case 'ADD_PIZZA_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'ADD_PIZZA_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}


export const updatePizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PIZZA_UPDATE_REQUEST':
            return {
                loading: true,
            }
        case 'PIZZA_UPDATE_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'PIZZA_UPDATE_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const getPizzaReducers = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PIZZA_DETAILS_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'GET_PIZZA_DETAILS_SUCCESS':
            return {
                loading: false,
                pizza: action.payload
            }
        case 'GET_PIZZA_DETAILS_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}