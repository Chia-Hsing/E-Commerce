import * as actionTypes from './actionTypes'

import { checkBagFromLS } from '../../utils/utilities'

export const postOrder = id => async dispatch => {
    try {
        const {
            items: { bag },
        } = await checkBagFromLS()

        dispatch({ type: actionTypes.POST_ORDER_SUCCESS, items: bag })
    } catch (error) {
        dispatch({ type: actionTypes.POST_ORDER_FAILED, error: error.message })
    }
}
