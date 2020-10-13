import React from 'react'
import { CAMBIO_IMAGEN } from '../actions/buscadorImagenAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Buscador from '../componentes/Buscador'
import Imagen from '../componentes/Imagen'
import Paginacion from '../componentes/Paginacion'
import Resultado from '../componentes/Resultado'


class contenedorBuscadorImagen extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Buscador />
				</div>
				<div>
					<Imagen />
				</div>
				<div>
					<Paginacion />
				</div>
				<div>
					<Resultado />
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
		fechDispatch: bindActionCreators(CAMBIO_IMAGEN, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(contenedorBuscadorImagen)



