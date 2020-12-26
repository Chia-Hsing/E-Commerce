import { combineReducers } from 'redux'
import mainMaterials from './mainMaterials'
import products from './products'
import bag from './bag'
import auth from './auth'

const rootReducer = combineReducers({
    mainMaterials,
    products,
    bag,
    auth,
})

export default rootReducer
