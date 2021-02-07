import * as actionTypes from './actionTypes'
import * as apis from '../../apis/order'

import { checkBagFromLS } from '../../utils/utilities'

export const setOrder = () => async dispatch => {
    try {
        const {
            items: { bag },
        } = await checkBagFromLS()

        dispatch({ type: actionTypes.SET_ORDER_SUCCESS, items: bag })
    } catch (error) {
        dispatch({ type: actionTypes.SET_ORDER_FAILED, error: error.message })
    }
}

export const addShippingDetail = detail => dispatch => {
    dispatch({ type: actionTypes.SET_SHIPPING_DETAIL_SUCCESS, shippingDetail: detail })
}

export const postOrder = (order, status) => async dispatch => {
    try {
        await apis.postOrder(order, status)
        dispatch({ type: actionTypes.POST_ORDER_SUCCESS, order, status })
    } catch (error) {}
}

// export const paymentProgress = () => async dispatch => {
//     try {
//     } catch (error) {}
// }
