import * as actionTypes from './actionTypes'
import * as apis from '../../apis/user'

export const getUserProfile = () => async dispatch => {
    try {
        const res = await apis.getUserProfile()

        const {
            data: { user },
        } = res

        dispatch({ type: actionTypes.GET_USER_PROFILE_SUCCESS, user })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_PROFILE_FAILED, error: error.message })
    }
}

export const updateUserProfile = (formData, config) => async dispatch => {
    try {
        const {
            data: { user, status, error },
            statusText,
        } = await apis.updateUserProfile(formData, config)

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                return dispatch({ type: actionTypes.GET_USER_PROFILE_FAILED, error: error })
            }
        }

        dispatch({ type: actionTypes.GET_USER_PROFILE_SUCCESS, user })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_PROFILE_FAILED, error: error.message })
    }
}

export const initDeliveryInfoError = () => dispatch => {
    dispatch({ type: actionTypes.INIT_DELIVERY_INFO_ERROR })
}

export const getDeliveryInfo = () => async dispatch => {
    try {
        const {
            data: { deliveryInfoList, message, status, error },
            statusText,
        } = await apis.getDeliveryInfo()

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                return dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error })
            }
            return dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: message })
        }

        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_SUCCESS, deliveryInfoList })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error.message })
    }
}

export const postDeliveryInfo = formData => async dispatch => {
    try {
        const {
            data: { status, error },
            statusText,
        } = await apis.postDeliveryInfo(formData)

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                return dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error })
            }
        }

        await dispatch(getDeliveryInfo())
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error.message })
    }
}

export const deleteDeliveryInfo = DID => async dispatch => {
    try {
        await apis.deleteDeliveryInfo(DID)

        await dispatch(getDeliveryInfo())
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error.message })
    }
}

export const updateDeliveryInfo = (DID, formData) => async dispatch => {
    dispatch(initDeliveryInfoError())
    try {
        const {
            data: { status, error },
            statusText,
        } = await apis.updateDeliveryInfo(DID, formData)

        if (status !== 'success' || statusText !== 'OK') {
            if (error) {
                return dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error })
            }
        }

        await dispatch(getDeliveryInfo())
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error.message })
    }
}

export const getUserOrder = () => async dispatch => {
    try {
        const {
            data: { userOrder, status, message },
            statusText,
        } = await apis.getUserOrder()

        if (status !== 'success' || statusText !== 'OK') {
            return dispatch({ type: actionTypes.GET_USER_ORDER_FAILED, error: message })
        }

        dispatch({ type: actionTypes.GET_USER_ORDER_SUCCESS, userOrder })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_ORDER_FAILED, error: error.message })
    }
}

export const clearUser = () => dispatch => {
    dispatch({ type: actionTypes.CLEAR_USER })
}
