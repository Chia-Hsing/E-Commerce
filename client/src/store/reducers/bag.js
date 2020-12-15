import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    bagItems: [],
}

const setBagItems = (state, action) => {
    return updateObj(state, { bagItems: action.items })
}

// const setBagToken = (state, action) => {
//     return updateObj(state, { bagItems: action.items })
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BAG_ITEMS:
            return setBagItems(state, action)
        default:
            return state
    }
}

export default reducer
