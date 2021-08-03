export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLACE_ORDER_REQUEST':
            return {
                loading: true,
            }
        case 'PLACE_ORDER_SUCCESS':
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case 'PLACE_ORDER_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getUserOrdersReducer = (state = {userOrder : []}, action) => {
    switch (action.type) {
        case 'USER_ORDERS_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'USER_ORDERS_SUCCESS':
            return {
                loading: false,
                success: true,
                userOrder: action.payload
            }
        case 'USER_ORDERS_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getAllOrdersReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case 'ALL_ORDERS_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'ALL_ORDERS_SUCCESS':
            return {
                loading: false,
                success: true,
                orders: action.payload
            }
        case 'ALL_ORDERS_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}