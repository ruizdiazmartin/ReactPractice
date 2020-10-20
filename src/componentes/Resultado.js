import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion'


export default function Resultado({imagenes}) {

	
		//const {imagenes} = props;
		if (imagenes.image === null) return null;

		return (
			<div>
				<div className="col-12 p-5 row">
					{imagenes.image.map(imagen => (
						<Imagen
							key={imagen.id}
							imagen={imagen}
						/>
					))}
				</div>
				{/* <Paginacion
					paginaAnterior={this.props.paginaAnterior}
					paginaSiguiente={this.props.paginaSiguiente}
				/> */}
			</div>
		)
	

	// render() {
	// 	return (
	// 		<div>
	// 			{this.mostrarImagenes()}
	// 		</div>
	// 	)
	// }
}


