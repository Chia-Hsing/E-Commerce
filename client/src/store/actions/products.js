import * as actionTypes from './actionTypes'
import * as apis from '../../apis/products'

export const getProducts = (gender, category, pageItemsLimit, page) => async dispatch => {
    try {
        const res = await apis.getProducts(gender, category, pageItemsLimit, page)

        if (res.data.status !== 'success' || res.statusText !== 'OK') throw new Error(res.data.message)

        const {
            data: { productResponse },
        } = res

        if (productResponse.products.length === 0) {
            productResponse.products = ['There is no item in this category!']
        }

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, productResponse })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILED, error })
    }
}
