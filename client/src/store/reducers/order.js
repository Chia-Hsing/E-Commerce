import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    order: {},
    error: null,
}

const postOrderSuccess = (state, action) => {
    return updateObj(state, { order: action.order, error: null })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_ORDER_SUCCESS:
            return postOrderSuccess(state, action)
        default:
            return state
    }
}

export default reducer
