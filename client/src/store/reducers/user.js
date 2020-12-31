import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    userProfile: {},
    error: null,
}

const getUserProfileSuccess = (state, action) => {
    return updateObj(state, { userProfile: action.user })
}

const getUserProfileFailed = (state, action) => {
    return updateObj(state, { user: {}, error: action.error.message })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_PROFILE_SUCCESS:
            return getUserProfileSuccess(state, action)
        case actionTypes.GET_USER_PROFILE_FAILED:
            return getUserProfileFailed(state, action)
        default:
            return state
    }
}

export default reducer
