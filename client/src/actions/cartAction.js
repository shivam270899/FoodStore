export const addToCart = (pizza, qty, varient) => (dispatch, getState) => {

    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        qty: Number(qty),
        varient: varient,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * qty
    }

    if (cartItem.qty > 10) {
        alert('you cannot add more than 10 quantities')
    }
    else {
        if (cartItem.qty < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}