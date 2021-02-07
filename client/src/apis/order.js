import { apiHelper } from '../utils/helpers'

export const postOrder = (order, status) => {
    return apiHelper.post(`/order/`, { order, status })
}

export const deleteOrder = UID => {
    return apiHelper.delete(`/order/${UID}`)
}
