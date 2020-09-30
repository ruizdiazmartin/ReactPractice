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
// 2- Permite la lectura del estado mediante el metodo getSate()
// 3- Permite crear un nuevo estado utilizando el metodo dispach(action)
// 4- Permite notificar cambios de estado via el metodo suscribe()
// 5- Se va a encargar de gestionar y almacenar el estado de la aplicacion.