import { apiHelper } from '../utils/helpers'

const getProducts = (gender, category, pageItemsLimit, page) => {
    const searchParams = new URLSearchParams({ gender, category, pageItemsLimit, page }).toString()
    return apiHelper.get(`/product?${searchParams}`)
}

const getProduct = (PID, page) => {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/product/${PID}?${searchParams}`).toString()
}

export { getProducts, getProduct }
