import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import productReducer from '../reducers/productReducer'
import cartReducer from '../reducers/cartReducer'

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    productsStore: productReducer,
    cartItemsStore: cartReducer
})

const initialStateFn = () => {
    const initState = localStorage.getItem("cartItems");
    if(initState === null) {
        return undefined
    } 
    return {cartItemsStore: {cartItems: JSON.parse(initState)}};
}

const initialState = initialStateFn();

console.log(initialState)

const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
    localStorage.setItem("cartItems", JSON.stringify(store.getState().cartItemsStore.cartItems))
})
export default store;