import * as actionTypes from './actionTypes'
import * as apis from '../../apis/order'

import { checkBagFromLS } from '../../utils/utilities'

export const setOrder = () => async dispatch => {
    try {
        const {
            items: { bag, totalQuantity, totalAmount },
        } = await checkBagFromLS()

        dispatch({ type: actionTypes.SET_ORDER_SUCCESS, items: bag, totalQuantity, totalAmount })
    } catch (error) {
        dispatch({ type: actionTypes.SET_ORDER_FAILED, error: error.message })
    }
}

export const addShippingDetail = detail => dispatch => {
    dispatch({ type: actionTypes.SET_SHIPPING_DETAIL_SUCCESS, shippingDetail: detail })
}

export const postOrder = (order, orderStatus) => async dispatch => {
    try {
        const {
            data: { status },
            statusText,
            message,
        } = await apis.postOrder(order, orderStatus)

        if (status !== 'success' || statusText !== 'OK') {
            return dispatch({ type: actionTypes.POST_ORDER_FAILED, error: message })
        }

        dispatch({ type: actionTypes.POST_ORDER_SUCCESS })
    } catch (error) {
        return dispatch({ type: actionTypes.POST_ORDER_FAILED, error: error.message })
    }
}

export const clearOrder = () => dispatch => {
    dispatch({ type: actionTypes.CLEAR_ORDER })
}
