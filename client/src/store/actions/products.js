import * as actionTypes from './actionTypes'
import * as apis from '../../apis/products'

export const getProducts = (gender, category, pageItemsLimit, page) => async dispatch => {
    try {
        const res = await apis.getProducts(gender, category, pageItemsLimit, page)
        const {
            data: { productResponse },
        } = res
        console.log(productResponse)

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, productResponse })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILED, error })
    }
}
