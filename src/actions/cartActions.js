import * as actionTypes from '../store/actionTypes';

export const addToCartActions = (cartItem) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            cartItem: cartItem
        }
    }
}

export const remFromCartActions = (cartItemId) => {
    return {
        type: actionTypes.REM_FROM_CART,
        payload: {
            _id: cartItemId
        }
    }
}

export const proceedToOrder = () => {
    return {
        type: actionTypes.PROCEED_TO_ORDER
    }
}