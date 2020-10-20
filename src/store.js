import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';


const store = createStore(
	reducers,
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
