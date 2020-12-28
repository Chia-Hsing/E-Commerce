import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
}

const initErrorAuth = (state, action) => {
    return updateObj(state, { error: null })
}

const authStart = (state, action) => {
    return updateObj(state, { error: null, loading: true })
}

const authSuccess = (state, action) => {
    return updateObj(state, { token: action.token, userId: action.userId, error: null, loading: false })
}

const authFailed = (state, action) => {
    return updateObj(state, { token: null, userId: null, error: action.error, loading: false })
}

const authLogout = (state, action) => {
    return initialState
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_ERROR_AUTH:
            return initErrorAuth(state, action)
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action)
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action)
        default:
            return state
    }
}

export default reducer
