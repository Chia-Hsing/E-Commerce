import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    bagItems: [],
    totalQuantity: 0,
    totalAmount: 0,
    error: null,
    purchasing: false,
}

const initBagItems = (state, action) => {
    return initialState
}

// bagItems: { items: { bag: []}, iat:..., exp:... }
const setBagItemsSuccess = (state, action) => {
    return updateObj(state, {
        bagItems: action.bagItems,
        totalQuantity: action.totalQuantity,
        totalAmount: action.totalAmount,
        purchasing: true,
        error: null,
    })
}

const setBagItemsFailed = (state, action) => {
    return updateObj(state, {
        bagItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        purchasing: false,
        error: action.error,
    })
}

const cleanBagSuccess = (state, action) => {
    return updateObj(state, {
        bagItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        purchasing: false,
        error: null,
    })
}

const initPurchasing = (state, action) => {
    return updateObj(state, { purchasing: false })
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
        case actionTypes.INIT_PURCHASING:
            return initPurchasing(state, action)
        default:
            return state
    }
}

export default reducer
