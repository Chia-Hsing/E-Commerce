import * as actionTypes from './actionTypes'
import * as apis from '../../apis/bag'
import { checkBagFromLS } from '../../utils/utilities'
import jwt_decode from 'jwt-decode'

export const setBagItems = () => async dispatch => {
    try {
        // bagItems: { items: { bag: [], totalQuantity: ..., totalAmount: ...}, iat:..., exp:... }
        const { items } = await checkBagFromLS()
        if (items) {
            return dispatch({
                type: actionTypes.SET_BAG_ITEMS_SUCCESS,
                bagItems: items.bag,
                totalQuantity: items.totalQuantity,
                totalAmount: items.totalAmount,
            })
        }

        dispatch({
            type: actionTypes.INIT_BAG_ITEMS,
        })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}

export const addItemToBag = (id, itemStock, itemSize) => async dispatch => {
    try {
        // bagToken: { token: ...}
        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token },
        } = await apis.addItemToBag(id, itemStock, itemSize, oldToken || {})

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))
        // { items: { bag: []}, iat:..., exp:... }
        const {
            items: { bag: bagItems, totalQuantity, totalAmount },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems, totalQuantity, totalAmount })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}

export const deleteItemFromBag = (id, itemSize) => async dispatch => {
    try {
        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token },
        } = await apis.deleteItemFromBag(id, itemSize, oldToken || {})

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))

        const {
            items: { bag: bagItems, totalQuantity, totalAmount },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems, totalQuantity, totalAmount })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}

export const removeWholeItem = (id, itemSize) => async dispatch => {
    try {
        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token },
        } = await apis.removeWholeItem(id, itemSize, oldToken || {})

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))

        const {
            items: { bag: bagItems, totalQuantity, totalAmount },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems, totalQuantity, totalAmount })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}

export const cleanBag = () => async dispatch => {
    try {
        localStorage.removeItem('bagToken')
        await apis.cleanBag()
        dispatch({ type: actionTypes.CLEAN_BAG_SUCCESS })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}
