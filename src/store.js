import { createStore } from 'redux'
import reducers from './reducers'


const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

//Patron Redux.

//El Store tiene las siguientes responsabilidades:

// 1- Contiene el estado actual de la aplicacion
// 5- Se va a encargar de gestionar y almacenar el estado de la aplicacion.