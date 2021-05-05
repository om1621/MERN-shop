import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const storedCartItems = localStorage.getItem('cart-items') ? JSON.parse(localStorage.getItem('cart-items')) : []

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const initialState = {
    cart: {
        cartItems: storedCartItems
    }
}

const middelwares = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middelwares)))

export default store