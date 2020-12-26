import * as actionTypes from './actionTypes'
import * as apis from '../../apis/auth'

export const signup = (name, email, password, confirmPassword) => async dispatch => {
    try {
        dispatch({ type: actionTypes.AUTH_START })
        const { token } = apis.signup(name, email, password, confirmPassword)
    } catch (error) {}
}
