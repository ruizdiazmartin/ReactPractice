import React from 'react'
import ContenedorSearcher from './containers/conteinerSearchImage'
import store from './store'
import { Provider } from 'react-redux'


function App() {
	return (
		<Provider store={store}>
			<ContenedorSearcher />
		</Provider>
	)
}


export default App