import * as actionTypes from './actionTypes'
import * as apis from '../../apis/bag'
import { checkBagFromLS } from '../../utils/utilities'
import jwt_decode from 'jwt-decode'

export const setBagItems = () => async dispatch => {
    try {
        // bagItems = {items: {bag:[]}}
        const bagItems = await checkBagFromLS()
        dispatch({ type: actionTypes.SET_BAG_ITEMS, bagItems })
    } catch (error) {}
}

export const addItemToBag = id => async dispatch => {
    try {
        const oldToken = localStorage.getItem('bagToken')
        const res = await apis.addItemToBag(id, oldToken || {})

        const {
            data: { token },
        } = res

        const tokenLS = token
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))
        const { items } = jwt_decode(token.token)
        // bag:{bag:[{}]}
        console.log(items)
        dispatch({ type: actionTypes.SET_BAG_ITEMS, items })
    } catch (error) {}
}
