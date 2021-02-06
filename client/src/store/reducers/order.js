import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    items: {},
    address: null,
    error: null,
}

const postOrderSuccess = (state, action) => {
    return updateObj(state, { items: action.items, error: null })
}

const postOrderFailed = (state, action) => {
    return updateObj(state, { items: {}, error: action.error })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_ORDER_SUCCESS:
            return postOrderSuccess(state, action)
        case actionTypes.POST_ORDER_FAILED:
            return postOrderFailed(state, action)
        default:
            return state
    }
}

export default reducer
