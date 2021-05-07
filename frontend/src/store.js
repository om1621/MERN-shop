import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userSignupReducer } from './reducers/userReducers'

const storedCartItems = localStorage.getItem('cart-items') ? JSON.parse(localStorage.getItem('cart-items')) : []

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer
})

const initialState = {
    cart: {
        cartItems: storedCartItems
    }
}

const middelwares = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middelwares)))

export default store