import { apiHelper } from '../utils/helpers'

export const addItemToBag = (id, itemStock, itemSize, oldToken) => {
    const productDetail = { itemStock, itemSize, oldToken }
    return apiHelper.post(`/bag/${id}`, productDetail)
}

export const deleteItemFromBag = (id, itemSize, oldToken) => {
    const productDetail = { oldToken, itemSize }
    return apiHelper.patch(`/bag/${id}`, productDetail)
}

export const removeWholeItem = (id, itemSize, oldToken) => {
    const productDetail = { oldToken, itemSize }
    return apiHelper.patch(`/bag/remove/${id}`, productDetail)
}

export const cleanBag = () => {
    return apiHelper.delete(`/bag`)
}
