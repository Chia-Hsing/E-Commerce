import { combineReducers } from 'redux'
import mainMaterials from './mainMaterials'
import products from './products'

const rootReducer = combineReducers({
    mainMaterials,
    products,
})

export default rootReducer
