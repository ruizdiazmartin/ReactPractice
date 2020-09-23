import { combineReducers } from 'redux'

//Reducers
import alertReducers from './reducers/alertReducers'


export default combineReducers({
	alert: alertReducers
})