import { combineReducers } from 'redux'
import mainMaterials from './mainMaterials'
import products from './products'
import bag from './bag'

const rootReducer = combineReducers({
    mainMaterials,
    products,
    bag,
})

export default rootReducer
