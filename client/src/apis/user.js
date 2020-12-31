import { apiHelper } from '../utils/helpers'

export const getUserProfile = () => {
    return apiHelper.get('/user/profile')
}
