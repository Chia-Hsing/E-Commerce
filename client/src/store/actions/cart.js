import * as actionTypes from './actionTypes'

export const setCartItems = items => dispatch => {
    dispatch({ type: actionTypes.SET_CART_ITEMS, items })
}
