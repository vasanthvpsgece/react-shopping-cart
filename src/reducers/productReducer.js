import * as actionTypes from '../store/actionTypes';
import data from '../data.json';

const initialState = {
    products: null,
}

const productReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: data.products
            }
        case actionTypes.SORT_PRODUCTS:

            const sortedProducts = state.products.slice().sort((a,b) => {
                if(action.sortValue === 'lowest') {
                  return a.price > b.price? 1 : -1
                } else if(action.sortValue === 'highest') {
                  return a.price > b.price? -1 : 1
                }
                return 0;
              })

            return {
                ...state,
                products: sortedProducts
            }
        case actionTypes.FILTER_PRODUCTS:
            const allProducts = data.products;
            const filteredProducts = allProducts.filter(product => (action.filterValue === "" ||
                                                                   product.availableSizes.indexOf(action.filterValue) >= 0));
            return {
                ...state,
                products: filteredProducts
            }
        default:
            return state;
    }
}

export default productReducer;