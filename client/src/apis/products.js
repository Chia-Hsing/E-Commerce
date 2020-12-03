import { apiHelper } from '../utils/helpers'

const getProducts = (gender, category, page) => {
    const searchParams = new URLSearchParams({ gender, category, page }).toString()
    return apiHelper.get(`/product?${searchParams}`)
}

const getProduct = (PID, page) => {
    const searchParams = new URLSearchParams({ page }).toString()
    return apiHelper.get(`/product/${PID}?${searchParams}`)
}

export { getProducts, getProduct }
