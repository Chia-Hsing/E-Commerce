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
        dispatch({ type: actionTypes.GET_USER_PROFILE_FAILED, error })
    }
}

export const updateUserProfile = (formData, config) => async dispatch => {
    try {
        const {
            data: { user },
        } = await apis.updateUserProfile(formData, config)

        dispatch({ type: actionTypes.GET_USER_PROFILE_SUCCESS, user })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_PROFILE_FAILED, error })
    }
}

export const getDeliveryInfo = () => async dispatch => {
    try {
        const res = await apis.getDeliveryInfo()

        const {
            data: { user },
        } = res

        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_SUCCESS, user })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_DELIVERY_INFO_FAILED, error })
    }
}

export const postDeliveryInfo = formData => async dispatch => {
    try {
        const customer = await apis.postDeliveryInfo(formData)

        // const { data } = customer

        console.log(customer)
    } catch (error) {
        console.log(error.message)
    }
}
