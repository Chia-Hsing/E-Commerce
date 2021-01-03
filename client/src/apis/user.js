import { apiHelper } from '../utils/helpers'

export const getUserProfile = () => {
    return apiHelper.get('/user/profile')
}

export const updateUserProfile = (name, email, phone, address, city, postalCode) => {
    const userDetail = { name, email, phone, address, city, postalCode }
    return apiHelper.patch('/user/profile', userDetail)
}
