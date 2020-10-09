import React from 'react'
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado'


class App extends React.Component {

	state = {
		termino: '',
		imagenes: [],
		pagina: ''
	}

	scroll = () => {
		const elemento = document.querySelector('.jumbotron')
		elemento.scrollIntoView('smooth', 'start')
	}

	paginaAnterior = () => {
		//Leer el state actual
		let pagina = this.state.pagina

		//Leer si la pagina es 1 no ir hacia atras
		if (pagina === 1) return null

		//Resto uno a la pagina actual
		pagina--

		//agregar el cambio al state
		this.setState({
			pagina
		}, () => {
			this.consultarApi()
			this.scroll();
		})

		//console.log(pagina)
	}

	paginaSiguiente = () => {
		//Leer el state actual
		let pagina = this.state.pagina

		//Sumar uno a la pagina actual
		pagina++

		//agregar el cambio al state
		this.setState({
			pagina
		}, () => {
			this.consultarApi()
			this.scroll();
		})

		//console.log(pagina)
	}

	consultarApi = () => {

		const pagina = this.state.pagina
		const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}
		&per_page=20&page=${pagina}`

		console.log(url)

		fetch(url)
			.then(respuesta => respuesta.json())
			.then(resultado => this.setState({ imagenes: resultado.hits }))
	}

	datosBusqueda = (termino) => {
		this.setState({
			termino: termino,
			pagina: 1
		}, () => {
			this.consultarApi()
		})
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<p className="lead text-center">Buscador de Imagenes</p>
					<Buscador
						datosBusqueda={this.datosBusqueda}
					/>
				</div>
				<div className="text-center">
					<Resultado
						imagenes={this.state.imagenes}
						paginaAnterior={this.paginaAnterior}
						paginaSiguiente={this.paginaSiguiente}
					/>
				</div>
			</div>
		)
	}
}

export default App