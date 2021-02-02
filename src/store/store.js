import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import productReducer from '../reducers/productReducer'
import cartReducer from '../reducers/cartReducer'
import modalReducer from '../reducers/modalReducer'

const logger = () => {
    return (dispatch) => {
        return (action) => {
            console.log('Middleware');
            return dispatch(action)
        }
    }
}

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    productsStore: productReducer,
    cartItemsStore: cartReducer,
    modalStore: modalReducer
})

const initialStateFn = () => {
    const initState = localStorage.getItem("cartItems");
    if(initState === null) {
        return undefined
    } 
    return {cartItemsStore: {cartItems: JSON.parse(initState)}};
}

const initialState = initialStateFn();

const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(logger, thunk)))

store.subscribe(() => {
    localStorage.setItem("cartItems", JSON.stringify(store.getState().cartItemsStore.cartItems))
})
export default store;