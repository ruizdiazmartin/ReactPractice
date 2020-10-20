import { combineReducers } from 'redux'
import buscadorImagenReducer from '../reducers/buscadorImagenReducer'

export default combineReducers({
	imagesReducers: buscadorImagenReducer
})

