import * as actionTypes from './actionTypes'

export const setBagItems = items => dispatch => {
    dispatch({ type: actionTypes.SET_BAG_ITEMS, items })
}
