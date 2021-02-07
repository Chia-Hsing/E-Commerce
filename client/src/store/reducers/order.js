import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    items: {},
    totalQuantity: null,
    totalAmount: null,
    shippingDetail: {},
    error: null,
}

const setOrderSuccess = (state, action) => {
    const items = action.items.map(item => {
        return { item: item.item, quantity: item.quantity, size: item.itemSize }
    })

    return updateObj(state, { items: items, error: null })
}

const setOrderFailed = (state, action) => {
    return updateObj(state, { items: {}, shippingDetail: {}, error: action.error })
}

const setShippingDetailSuccess = (state, action) => {
    return updateObj(state, { shippingDetail: action.shippingDetail, error: null })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ORDER_SUCCESS:
            return setOrderSuccess(state, action)
        case actionTypes.SET_ORDER_FAILED:
            return setOrderFailed(state, action)
        case actionTypes.SET_SHIPPING_DETAIL_SUCCESS:
            return setShippingDetailSuccess(state, action)
        default:
            return state
    }
}

export default reducer
