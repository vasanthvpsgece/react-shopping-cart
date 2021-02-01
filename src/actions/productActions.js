import * as actionTypes from '../store/actionTypes'

export const fetchProductsActions = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS
    }
}

export const filterProductsActions = (filterValue) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        filterValue: filterValue
    }
}

export const sortProductsActions = (sortValue) => {
    return {
        type: actionTypes.SORT_PRODUCTS,
        sortValue: sortValue
    }
}

export const fetchProducts = () => {
    return dispatch => {
        fetch('/api/products')
        .then(response => {
            dispatch(fetchProductsActions(response.data))
        })
    }
}