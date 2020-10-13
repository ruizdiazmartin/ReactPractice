import { combineReducers } from 'react-redux'
import buscadorImagenReducer from '../reducers/buscadorImagenReducer'

export default combineReducers({
	imagesReducers: buscadorImagenReducer
})

