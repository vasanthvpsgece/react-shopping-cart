import * as actionTypes from '../store/actionTypes'

const initialState = {
    cartItems: [],
    showContactForm: false
}

const cartReducer = (state = initialState, action) => {

    let dupCartItems = state.cartItems.slice();
    let updatedShowContactForm = state.showContactForm;

    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            let alreadyExists = false;
            dupCartItems = dupCartItems.map(dupCartItem => {
                if(dupCartItem._id === action.payload.cartItem._id) {
                    alreadyExists = true;
                    return ({...dupCartItem, count: dupCartItem.count+1})
                }
                return dupCartItem;
            })

            if(!alreadyExists) {
                dupCartItems.push({...action.payload.cartItem, count: 1})
            }

            return {
                ...state,
                cartItems: dupCartItems
            }

        case actionTypes.REM_FROM_CART:
            dupCartItems = dupCartItems.map(dupCartItem => {
                if(dupCartItem._id === action.payload._id) {
                    return ({...dupCartItem, count: dupCartItem.count-1})
                }
                return dupCartItem;
            }).filter(dupCartItem => dupCartItem.count > 0)
            
            if(dupCartItems.length === 0) {
                updatedShowContactForm = false;
            }

            return {
                ...state,
                cartItems: dupCartItems,
                showContactForm: updatedShowContactForm
            }
        case actionTypes.PROCEED_TO_ORDER:
             updatedShowContactForm = !updatedShowContactForm;

            return {
                ...state,
                showContactForm: updatedShowContactForm
            }
        default:
            return state;
    }
}

export default cartReducer;