import * as actionTypes from './actionTypes'
import * as apis from '../../apis/bag'
import { checkBagFromLS } from '../../utils/utilities'

export const setBagItems = () => async dispatch => {
    try {
        const items = await checkBagFromLS()
        dispatch({ type: actionTypes.SET_BAG_ITEMS, items })
    } catch (error) {}
}

export const addItemToBag = id => async dispatch => {
    try {
        const oldToken = localStorage.getItem('bag')
        const token = await apis.addItemToBag(id, oldToken || {})
        dispatch({ type: actionTypes.SET_BAG_TOKEN, token })
    } catch (error) {}
}
