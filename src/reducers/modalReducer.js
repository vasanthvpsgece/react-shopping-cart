import * as actionTypes from '../store/actionTypes';

const initialState = {
    product: null,
    isOpen: false
}

const modalReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                product: action.payload.product,
                isOpen: true
            }
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                product: null,
                isOpen: false
            }
        default:
            return state;
    }
}

export default modalReducer;