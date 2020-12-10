import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    mainCategories: [],
    newArrival: [],
    error: null,
}

const getMainMaterialsSuccess = (state, action) => {
    return updateObj(state, { mainCategories: action.mainCategories, newArrival: action.newArrival, error: null })
}
const getMainMaterialsFailed = (state, action) => {
    return updateObj(state, { error: action.error.message })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MAIN_MATERIALS_SUCCESS:
            return getMainMaterialsSuccess(state, action)
        case actionTypes.GET_MAIN_MATERIALS_FAILED:
            return getMainMaterialsFailed(state, action)
        default:
            return state
    }
}

export default reducer
