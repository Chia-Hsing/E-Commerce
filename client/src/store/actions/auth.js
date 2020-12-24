import * as actionTypes from './actionTypes'

export const signup = (name, email, password, confirmPassword) => async dispatch => {
    try {
        console.log(name, email, password, confirmPassword)
    } catch (error) {}
}
