import * as actionTypes from './actionTypes'
import * as apis from '../../apis/bag'
import { checkBagFromLS } from '../../utils/utilities'
import jwt_decode from 'jwt-decode'

export const setBagItems = () => async dispatch => {
    try {
        // bagItems: { items: { bag: []}, iat:..., exp:... }
        const bagItems = await checkBagFromLS()
        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}

export const addItemToBag = id => async dispatch => {
    try {
        // bagToken: { token: ...}
        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token },
        } = await apis.addItemToBag(id, oldToken || {})

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))
        // { items: { bag: []}, iat:..., exp:... }
        const {
            items: { bag: bagItems },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}
