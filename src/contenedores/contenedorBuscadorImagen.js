import React from 'react';
import { fetchSearchImages } from '../actions/buscadorImagenAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Buscador from '../componentes/Buscador';
import Resultado from '../componentes/Resultado';


class contenedorBuscadorImagen extends React.Component {

	scroll = () => {
		const elemento = document.querySelector('.jumbotron')
		elemento.scrollIntoView('smooth', 'start')
	}

	paginaAnterior = () => {
		this.props.fetchSearchImages(this.props.imagesReducers.search, this.props.imagesReducers.page - 1);
	}

	paginaSiguiente = () => {
		this.props.fetchSearchImages(this.props.imagesReducers.search, this.props.imagesReducers.page + 1);
	}


	datosBusqueda = (busqueda) => {
		this.props.fetchSearchImages(busqueda, 1);
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
					{this.props.imagesReducers.isFetching ?
						<div class="spinner-border" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						:
						this.props.imagesReducers.totalImages === 0 ?
							"NO HAY RESULTADOS PARA ESTA BUSQUEDA, INTENTE CON OTRA"
							:
							<Resultado
								imagesReducers={this.props.imagesReducers}
								paginaAnterior={this.paginaAnterior}
								paginaSiguiente={this.paginaSiguiente}
							/>
					}

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



