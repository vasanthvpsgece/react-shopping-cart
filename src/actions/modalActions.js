import * as actionTypes from '../store/actionTypes'

export const openModal = (product) => {
    return {
        type: actionTypes.OPEN_MODAL,
        payload: {
            product: product
        }
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}