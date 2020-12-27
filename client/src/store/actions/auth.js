import jwt_decode from 'jwt-decode'

import * as actionTypes from './actionTypes'
import * as apis from '../../apis/auth'

export const initAuth = () => async dispatch => {
    dispatch({ type: actionTypes.INIT_AUTH })
}

export const signup = (name, email, password, confirmPassword) => async dispatch => {
    try {
        dispatch({ type: actionTypes.AUTH_START })

        const res = await apis.signup(name, email, password, confirmPassword)

        if (res.data.status !== 'success' || res.statusText !== 'OK') {
            if (res.data.error) {
                return dispatch({ type: actionTypes.AUTH_FAILED, error: res.data.error })
            }
            return dispatch({ type: actionTypes.AUTH_FAILED, error: res.data.message })
        }

        const {
            data: { token },
        } = res

        const jwtObj = jwt_decode(token)
        const userId = jwtObj._id
        const expirationDate = jwtObj.exp

        localStorage.setItem('authToken', JSON.stringify({ token, userId, expirationDate }))

        dispatch({ type: actionTypes.AUTH_SUCCESS, token, userId })
    } catch (error) {
        dispatch({ type: actionTypes.AUTH_FAILED, error })
    }
}

export const authCheckState = async () => {
    try {
        // const a = JSON.parse(localStorage.getItem('authToken'))
    } catch (error) {}
}
