import { apiHelper } from '../utils/helpers'

export const postOrder = (UID, oldToken) => {
    return apiHelper.post(`/order/${UID}`, { oldToken })
}
