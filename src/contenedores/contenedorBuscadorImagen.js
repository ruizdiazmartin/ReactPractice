import React from 'react';
import { fetchSearchImages } from '../actions/buscadorImagenAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Buscador from '../componentes/Buscador';
import Imagen from '../componentes/Imagen';
import Paginacion from '../componentes/Paginacion';
import Resultado from '../componentes/Resultado';


class contenedorBuscadorImagen extends React.Component {

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
	}


	datosBusqueda = (busqueda) => {
		this.props.fetchSearchImages(busqueda);
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
						imagenes={this.props.imagesReducers}
						paginaAnterior={this.paginaAnterior}
						paginaSiguiente={this.paginaSiguiente}
					/>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		imagesReducers: state.imagesReducers
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSearchImages: bindActionCreators(fetchSearchImages, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(contenedorBuscadorImagen)


