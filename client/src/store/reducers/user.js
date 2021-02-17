import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    userProfile: {},
    deliveryInfoList: [],
    userOrder: [],
    error: null,
}

const getUserProfileSuccess = (state, action) => {
    return updateObj(state, { userProfile: action.user, error: null })
}

const getUserProfileFailed = (state, action) => {
    return updateObj(state, { error: action.error })
}

const initDeliveryInfoError = (state, action) => {
    return updateObj(state, { error: null })
}

const getDeliveryInfoSuccess = (state, action) => {
    const deliveryInfoListArr = [...action.deliveryInfoList]
    return updateObj(state, { deliveryInfoList: deliveryInfoListArr, error: null })
}

const getDeliveryInfoFailed = (state, action) => {
    return updateObj(state, { error: action.error })
}

const getUserOrderSuccess = (state, action) => {
    return updateObj(state, { userOrder: action.userOrder })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_PROFILE_SUCCESS:
            return getUserProfileSuccess(state, action)
        case actionTypes.GET_USER_PROFILE_FAILED:
            return getUserProfileFailed(state, action)
        case actionTypes.INIT_DELIVERY_INFO_ERROR:
            return initDeliveryInfoError(state, action)
        case actionTypes.GET_USER_DELIVERY_INFO_SUCCESS:
            return getDeliveryInfoSuccess(state, action)
        case actionTypes.GET_USER_DELIVERY_INFO_FAILED:
            return getDeliveryInfoFailed(state, action)
        case actionTypes.GET_USER_ORDER_SUCCESS:
            return getUserOrderSuccess(state, action)
        default:
            return state
    }
}

export default reducer
