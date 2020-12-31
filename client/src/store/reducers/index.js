import { combineReducers } from 'redux'
import mainMaterials from './mainMaterials'
import products from './products'
import bag from './bag'
import auth from './auth'
import user from './user'

const rootReducer = combineReducers({
    mainMaterials,
    products,
    bag,
    auth,
    user,
})

export default rootReducer
