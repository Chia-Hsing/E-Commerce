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