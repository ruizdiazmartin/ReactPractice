import { combineReducers } from 'redux'
import searchImageReducer from '../reducers/searchImageReducer'

export default combineReducers({
	imagesReducers: searchImageReducer
})

