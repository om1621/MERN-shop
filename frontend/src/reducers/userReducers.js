import {
    USER_LOGIN_WAITING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_WAITING
} from '../actions/actionTypes'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_WAITING: {
            return {
                loading: true,
            }
        }

        case USER_LOGIN_SUCCESS: {
            return {
                loading: false,
                userInfo: action.payload
            }
        }

        case USER_LOGIN_FAIL: {
            return {
                loading: false,
                error: action.payload
            }
        }

        case USER_LOGOUT: {
            return {}
        }

        default: {
            return state
        }
    }
}

export const userSignupReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_SIGNUP_WAITING: {
            return {
                ...state,
                loading: true,
            }
        }

        case USER_SIGNUP_SUCCESS: {
            return {
                loading: false,
                user: action.payload
            }
        }

        case USER_SIGNUP_FAIL: {
            return {
                loading: false,
                error: action.payload
            }
        }

        default: {
            return state
        }
    }
}