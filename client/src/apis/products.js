import { apiHelper } from '../utils/helpers'

export const getProducts = (gender, category, pageItemsLimit, page) => {
    const searchParams = new URLSearchParams({ gender, category, pageItemsLimit, page }).toString()
    return apiHelper.get(`/products?${searchParams}`)
}

export const getProduct = PID => {
    return apiHelper.get(`/products/product/${PID}`)
}
