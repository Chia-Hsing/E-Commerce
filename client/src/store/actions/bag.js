import * as actionTypes from './actionTypes'
import { checkBagFromLS } from '../../utils/utilities'
import * as bagApis from '../../apis/bag'
import * as orderApis from '../../apis/order'
import jwt_decode from 'jwt-decode'

export const setBagItems = () => async dispatch => {
    try {
        // bagItems: { items: { bag: [], totalQuantity: ..., totalAmount: ...}, iat:..., exp:... }
        const { items } = await checkBagFromLS()
        if (items) {
            if (items.totalQuantity <= 0) {
                // if there is nothing in the bag, initialize the bag state
                return dispatch({
                    type: actionTypes.INIT_BAG_ITEMS,
                })
            } else {
                // otherwise set the bag state items according to the data in local storage
                return dispatch({
                    type: actionTypes.SET_BAG_ITEMS_SUCCESS,
                    bagItems: items.bag,
                    totalQuantity: items.totalQuantity,
                    totalAmount: items.totalAmount,
                })
            }
        }
        // if there is no data in local storage, initialize the bag state
        dispatch({
            type: actionTypes.INIT_BAG_ITEMS,
        })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: error.message })
    }
}

export const addItemToBag = (PID, UID, itemStock, itemSize) => async dispatch => {
    try {
        // once edit the product in the bag, delete the pending order that already exists in the database.
        orderApis.deleteOrder(UID)
        // bagToken: { token: ...}
        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token, status, message, error },
            statusText,
        } = await bagApis.addItemToBag(PID, itemStock, itemSize, oldToken || {})

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                // express validation results Object
                return dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: error })
            }
            return dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: message })
        }

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))
        // { items: { bag: []}, iat:..., exp:... }
        const {
            items: { bag: bagItems, totalQuantity, totalAmount },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems, totalQuantity, totalAmount })
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: error.message })
    }
}

export const deleteItemFromBag = (PID, UID, itemSize) => async dispatch => {
    try {
        // once edit the product in the bag, delete the pending order that already exists in the database.
        orderApis.deleteOrder(UID)

        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token, status, error },
            statusText,
        } = await bagApis.deleteItemFromBag(PID, itemSize, oldToken || {})

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                // express validation results Object
                return dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: error })
            }
        }

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))

        const {
            items: { bag: bagItems, totalQuantity, totalAmount },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems, totalQuantity, totalAmount })

        // if there is nothing in bag, set the redirect path to '/' instead of '/shopping-bag'
        if (totalQuantity <= 0) {
            dispatch({ type: actionTypes.INIT_PURCHASING })
        }
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: error.message })
    }
}

export const removeWholeItem = (PID, UID, itemSize) => async dispatch => {
    try {
        // once edit the product in the bag, delete the pending order that already exists in the database.
        orderApis.deleteOrder(UID)

        const oldToken = JSON.parse(localStorage.getItem('bagToken'))

        const {
            data: { token, status, error },
            statusText,
        } = await bagApis.removeWholeItem(PID, itemSize, oldToken || {})

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                // express validation results Object
                return dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error: error })
            }
        }

        const tokenLS = { token }
        localStorage.setItem('bagToken', JSON.stringify(tokenLS))

        const {
            items: { bag: bagItems, totalQuantity, totalAmount },
        } = jwt_decode(token)

        dispatch({ type: actionTypes.SET_BAG_ITEMS_SUCCESS, bagItems, totalQuantity, totalAmount })

        if (totalQuantity <= 0) {
            dispatch({ type: actionTypes.INIT_PURCHASING })
        }
    } catch (error) {
        dispatch({ type: actionTypes.SET_BAG_ITEMS_FAILED, error })
    }
}

export const cleanBag = UID => async dispatch => {
    localStorage.removeItem('bagToken')
    // once edit the product in the bag, delete the pending order that already exists in the database.
    orderApis.deleteOrder(UID)
    await bagApis.cleanBag()
    dispatch({ type: actionTypes.CLEAN_BAG_SUCCESS })
    dispatch({ type: actionTypes.INIT_PURCHASING })
}
