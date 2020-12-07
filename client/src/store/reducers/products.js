import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    products: [],
    totalPages: 1,
    loading: true,
    error: null,
}

const initProducts = (state, action) => {
    return updateObj(state, { products: [], loading: true, totalPages: 1, error: null })
}

const getProductsSuccess = (state, action) => {
    const { totalPages, products } = action.productResponse
    const newProducts = [...state.products, ...products]
    return updateObj(state, { totalPages, loading: false, products: newProducts, error: null })
}

const getProductsFailed = (state, action) => {
    return updateObj(state, { totalPages: 1, loading: false, products: [], error: action.error.message })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PRODUCTS:
            return initProducts(state, action)
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return getProductsSuccess(state, action)
        case actionTypes.GET_PRODUCTS_FAILED:
            return getProductsFailed(state, action)
        default:
            return state
    }
}

export default reducer
