import {
    USER_LOGIN_WAITING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_WAITING
} from './actionTypes'

export const userLoginAction = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_WAITING
    })

    const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    });

    const data = await res.json();

    if (data.type) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: data
        })
    }
    else {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    }
}

export const userSignupAction = (name, email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNUP_WAITING
    })

    const res = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include',
    });

    const data = await res.json();

    if (data.type) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: data
        })
    }
    else {
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    }
}

