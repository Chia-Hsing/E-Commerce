import * as apis from '../../apis/mainMaterials'
import * as actionTypes from './actionTypes'

export const getMainMaterials = () => async dispatch => {
    try {
        const res = await apis.getMainMaterials()
        const {
            data: { mainCategories },
        } = res
        dispatch({ type: actionTypes.GET_MAIN_MATERIALS_SUCCESS, mainCategories })
    } catch (error) {
        dispatch({ type: actionTypes.GET_MAIN_MATERIALS_FAILED, error })
    }
}
