import { apiHelper } from '../utils/helpers'

export const addItemToBag = (id, itemStock, itemSize, oldToken) => {
    const productDetail = { itemStock, itemSize, oldToken }
    return apiHelper.post(`/bag/${id}`, productDetail)
}

export const deleteItemFromBag = (id, itemSize, oldToken) => {
    const productDetail = { oldToken, itemSize }
    return apiHelper.put(`/bag/${id}`, productDetail)
}
