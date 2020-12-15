import { apiHelper } from '../utils/helpers'

export const addItemToBag = (id, oldToken) => {
    return apiHelper.post(`/bag/${id}`, oldToken)
}
