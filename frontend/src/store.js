import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({})

const initialState = {}

const middelwares = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middelwares)))

export default store