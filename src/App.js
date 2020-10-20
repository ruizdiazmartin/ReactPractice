import React from 'react'
import ContenedorBuscador from './contenedores/contenedorBuscadorImagen'
import store from './store'
import { Provider } from 'react-redux'


function App() {
	return (
		<Provider store={store}>
			<ContenedorBuscador />
		</Provider>
	)
}


export default App