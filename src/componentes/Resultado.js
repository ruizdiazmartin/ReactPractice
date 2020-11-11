import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion'


export default function Resultado({ imagesReducers, paginaAnterior, paginaSiguiente }) {

	if (imagesReducers.images === null) return null;

	return (
		<div>
			<div className="col-12 p-5 row">
				{imagesReducers.images.map(imagen => (
					<Imagen
						key={imagen.id}
						imagen={imagen}
					/>
				))}
			</div>
			<Paginacion
				page={imagesReducers.page}
				paginaAnterior={paginaAnterior}
				paginaSiguiente={paginaSiguiente}
				lastPage={imagesReducers.lastPage}
			/>
		</div>
	)
}


