import jwt_decode from 'jwt-decode'

import * as actionTypes from './actionTypes'
import * as apis from '../../apis/auth'

// initialize the error state when the route changed
export const initErrorAuth = () => async dispatch => {
    dispatch({ type: actionTypes.INIT_ERROR_AUTH })
}

// logout action creator
export const logout = () => {
    localStorage.removeItem('authObj')
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path,
    }
}

// set a timer, which is using the span of time from now since the user sign up or log in
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime - new Date().getTime())
    }
}

// signup action creator
export const signup = (name, email, password, confirmPassword) => async dispatch => {
    try {
        dispatch({ type: actionTypes.AUTH_START })

        const res = await apis.signup(name, email, password, confirmPassword)

        if (res.data.status !== 'success' || res.statusText !== 'OK') {
            if (res.data.error) {
                // express validation results Object
                return dispatch({ type: actionTypes.AUTH_FAILED, error: res.data.error })
            }
            // the message of which the email already exists.
            return dispatch({ type: actionTypes.AUTH_FAILED, error: res.data.message })
        }

        const {
            data: { token },
        } = res

        const authObj = jwt_decode(token)
        const userId = authObj._id
        const expirationTimeStamp = authObj.exp

        localStorage.setItem('authObj', JSON.stringify({ token, userId, expirationTimeStamp }))

        // update the state
        dispatch({ type: actionTypes.AUTH_SUCCESS, token, userId })
        // set the timer
        dispatch(checkAuthTimeout(expirationTimeStamp))
    } catch (error) {
        dispatch({ type: actionTypes.AUTH_FAILED, error })
    }
}

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: actionTypes.AUTH_START })

        const res = await apis.login(email, password)

        if (res.data.status !== 'success' || res.statusText !== 'OK') {
            if (res.data.error) {
                // express validation results Object
                return dispatch({ type: actionTypes.AUTH_FAILED, error: res.data.error })
            }
            // the message of which the email is not signed up yet.
            return dispatch({ type: actionTypes.AUTH_FAILED, error: res.data.message })
        }

        const {
            data: { token },
        } = res

        const authObj = jwt_decode(token)
        const userId = authObj._id
        const expirationTimeStamp = authObj.exp

        localStorage.setItem('authObj', JSON.stringify({ token, userId, expirationTimeStamp }))

        // update the state
        dispatch({ type: actionTypes.AUTH_SUCCESS, token, userId })
        // set the timer
        dispatch(checkAuthTimeout(expirationTimeStamp))
    } catch (error) {
        dispatch({ type: actionTypes.AUTH_FAILED, error })
    }
}
// check if the token existing in local storage is out of time
export const authCheckState = () => dispatch => {
    const authObj = JSON.parse(localStorage.getItem('authObj'))

    if (!authObj) {
        dispatch(logout())
    } else {
        const expirationTimeStamp = authObj.expirationTimeStamp
        const userId = authObj.userId
        const token = authObj.token
        if (expirationTimeStamp <= new Date().getTime()) {
            dispatch(logout())
        } else {
            dispatch({ type: actionTypes.AUTH_SUCCESS, token, userId })
            dispatch(checkAuthTimeout(expirationTimeStamp - new Date().getTime()))
        }
    }
}
