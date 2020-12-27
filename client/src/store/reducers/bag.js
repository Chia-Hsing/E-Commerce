import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    bagItems: [],
    totalQuantity: 0,
    totalAmount: 0,
    error: null,
}

const initBagItems = (state, action) => {
    return updateObj(state, {
        bagItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        error: null,
    })
}

// bagItems: { items: { bag: []}, iat:..., exp:... }
const setBagItemsSuccess = (state, action) => {
    return updateObj(state, {
        bagItems: action.bagItems,
        totalQuantity: action.totalQuantity,
        totalAmount: action.totalAmount,
        error: null,
    })
}

const setBagItemsFailed = (state, action) => {
    return updateObj(state, {
        bagItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        error: action.error,
    })
}

const cleanBagSuccess = (state, action) => {
    return updateObj(state, {
        bagItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        error: null,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_BAG_ITEMS:
            return initBagItems(state, action)
        case actionTypes.SET_BAG_ITEMS_SUCCESS:
            return setBagItemsSuccess(state, action)
        case actionTypes.SET_BAG_ITEMS_FAILED:
            return setBagItemsFailed(state, action)
        case actionTypes.CLEAN_BAG_SUCCESS:
            return cleanBagSuccess(state, action)
        default:
            return state
    }
}

export default reducer
