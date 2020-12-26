import * as actionTypes from './actionTypes'
import * as apis from '../../apis/auth'

export const signup = (name, email, password, confirmPassword) => async dispatch => {
    try {
        dispatch({ type: actionTypes.AUTH_START })
        const {
            data: { token },
        } = await apis.signup(name, email, password, confirmPassword)

        localStorage.setItem('authToken', token)

        dispatch({ type: actionTypes.AUTH_SUCCESS, token })
    } catch (error) {
        dispatch({ type: actionTypes.AUTH_FAILED })
    }
}
