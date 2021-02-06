import { apiHelper } from '../utils/helpers'

export const getOrder = UID => {
    return apiHelper.get(`/order/${UID}`)
}

export const postOrder = (UID, oldToken) => {
    return apiHelper.post(`/order/${UID}`, { oldToken })
}

export const deleteOrder = UID => {
    return apiHelper.delete(`/order/${UID}`)
}
