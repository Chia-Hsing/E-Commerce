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

        dispatch(getDeliveryInfo())
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error.message })
    }
}

export const deleteDeliveryInfo = DID => async dispatch => {
    try {
        await apis.deleteDeliveryInfo(DID)
        dispatch(getDeliveryInfo())
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error: error.message })
    }
}
