import * as actionTypes from './actionTypes'
import * as apis from '../../apis/order'

export const postOrder = id => async dispatch => {
    try {
        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        await apis.postOrder(id, oldToken || {})
        dispatch({ type: actionTypes.POST_ORDER_SUCCESS })
    } catch (error) {}
}
