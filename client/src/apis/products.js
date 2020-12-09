import { apiHelper } from '../utils/helpers'

const getProducts = (gender, category, pageItemsLimit, page) => {
    const searchParams = new URLSearchParams({ gender, category, pageItemsLimit, page }).toString()
    return apiHelper.get(`/products?${searchParams}`)
}

const getProduct = PID => {
    return apiHelper.get(`/products/product/${PID}`).toString()
}

export { getProducts, getProduct }
