import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../../utils/utilities'

const initialState = {
    products: [],
    product: {},
    totalPages: 1,
    isNoItem: false,
    loading: true,
    error: null,
}

const initProducts = (state, action) => {
    return updateObj(state, { products: [], product: {}, loading: true, totalPages: 1, error: null, isNoItem: false })
}

const getProductsSuccess = (state, action) => {
    const { totalPages, products } = action.productResponse
    if (products.length === 0) {
        return updateObj(state, { isNoItem: true })
    }
    const newProducts = [...state.products, ...products]
    return updateObj(state, {
        totalPages,
        loading: false,
        isNoItem: false,
        product: {},
        products: newProducts,
        error: null,
    })
}

const getProductsFailed = (state, action) => {
    return updateObj(state, {
        totalPages: 1,
        loading: false,
        products: [],
        product: {},
        error: action.error.message,
    })
}

const getProductSuccess = (state, action) => {
    const product = action.product

    return updateObj(state, {
        product,
        loading: false,
        error: null,
        products: [],
    })
}

const getProductFailed = (state, action) => {
    return updateObj(state, {
        product: {},
        products: [],
        loading: false,
        error: action.error.message,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PRODUCTS:
            return initProducts(state, action)
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return getProductsSuccess(state, action)
        case actionTypes.GET_PRODUCTS_FAILED:
            return getProductsFailed(state, action)
        case actionTypes.GET_PRODUCT_SUCCESS:
            return getProductSuccess(state, action)
        case actionTypes.GET_PRODUCT_FAILED:
            return getProductFailed(state, action)
        default:
            return state
    }
}

export default reducer
