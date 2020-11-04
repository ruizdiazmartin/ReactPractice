import React from 'react'

const Paginacion = ({ page, paginaAnterior, paginaSiguiente, totalImages }) => {

	const paginado = totalImages / 20;

	return (
		<div className="py_3">
			{page === 1 ? null : <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior</button>}
			{page > paginado ? null : <button onClick={paginaSiguiente} type="button" className="btn btn-info">Siguiente</button>}
		</div>
	)
}

export default Paginacion