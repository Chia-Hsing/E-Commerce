import { apiHelper } from '../utils/helpers'

export const getUserProfile = () => {
    return apiHelper.get('/user/profile')
}

export const updateUserProfile = (formData, config) => {
    return apiHelper.patch('/user/profile', formData, config)
}

export const getDeliveryInfo = formData => {
    return apiHelper.get('/user/customer', formData)
}

export const postDeliveryInfo = formData => {
    return apiHelper.post('/user/customer', formData)
}
