import * as apis from '../../apis/mainMaterials'
import axios from 'axios'
import * as actionTypes from './actionTypes'

export const getMainMaterials = () => async dispatch => {
    try {
        const res = await apis.getMainMaterials()
        // apis.getMainMaterials()
        dispatch({ type: actionTypes.GET_MAIN_MATERIALS_SUCCESS, materials: res.data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_MAIN_MATERIALS_FAILED, error })
    }
}
