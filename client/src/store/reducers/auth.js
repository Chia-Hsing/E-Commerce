import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
}

const initAuth = (state, action) => {
    return initialState
}

const authStart = (state, action) => {
    return updateObj(state, { error: null, loading: true })
}

const authSuccess = (state, action) => {
    return updateObj(state, { token: action.token, error: null, loading: false })
}

const authFailed = (state, action) => {
    return updateObj(state, { token: null, error: action.error, loading: false })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_AUTH:
            return initAuth(state, action)
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action)
        default:
            return state
    }
}

export default reducer
