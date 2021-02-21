import axios from 'axios'

// const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = 'https://chia-e-commerce-app.herokuapp.com/api'

const axiosInstance = axios.create({
    baseURL,
})

// const authObj = JSON.parse(localStorage.getItem('authObj'))

// if (authObj) {
//     axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${authObj.token}`
// } else {
//     axiosInstance.defaults.headers.common['Authorization'] = null
// }

axiosInstance.interceptors.request.use(
    config => {
        const authObj = JSON.parse(localStorage.getItem('authObj'))

        if (authObj) config.headers['Authorization'] = `Bearer ${authObj.token}`

        return config
    },
    error => {
        Promise.reject(error)
    }
)

export const apiHelper = axiosInstance
