import { apiHelper } from '../utils/helpers'

export const signup = (name, email, password, confirmPassword) => {
    const authDetail = { name, email, password, confirmPassword }
    return apiHelper.post('/auth/signup', authDetail)
}

export const login = (email, password) => {
    const authDetail = { email, password }
    return apiHelper.post('/auth/login', authDetail)
}
