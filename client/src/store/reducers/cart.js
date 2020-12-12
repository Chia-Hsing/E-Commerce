import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    cartItems: [],
}

const setCartItems = (state, action) => {
    return updateObj(state, { cartItems: action.items })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CART_ITEMS:
            return setCartItems(state, action)
        default:
            return state
    }
}

export default reducer
