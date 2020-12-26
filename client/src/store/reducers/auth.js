import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
}

const authStart = (state, action) => {
    return updateObj(state, { error: null, loading: true })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action)
        default:
            return state
    }
}

export default reducer
