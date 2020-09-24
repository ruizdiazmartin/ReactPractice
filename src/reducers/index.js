import { combineReducers } from 'redux'

//Reducers
import alertReducers from './alertReducers'


export default combineReducers({
	alerts: alertReducers
})