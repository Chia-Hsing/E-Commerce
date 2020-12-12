import { combineReducers } from 'redux'
import mainMaterials from './mainMaterials'
import products from './products'
import cart from './cart'

const rootReducer = combineReducers({
    mainMaterials,
    products,
    cart,
})

export default rootReducer
