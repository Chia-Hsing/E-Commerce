import apis from '../../apis/mainMaterials'

import * as actionTypes from './actionTypes'

export const getMainMaterials = () => {
    return async dispatch => {
        try {
            const materials = await apis.getMainMaterials()
            dispatch({ type: actionTypes.GET_MAIN_MATERIALS_SUCCESS, materials })
        } catch (e) {
            dispatch({ type: actionTypes.GET_MAIN_MATERIALS_FAILED, e })
        }
    }
}
