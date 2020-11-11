import React from 'react'

const Paginacion = ({ page, paginaAnterior, paginaSiguiente, lastPage }) => {

	return (
		<div className="py_3">
			{page === 1 ? null : <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior</button>}
			{page === lastPage ? null : <button onClick={paginaSiguiente} type="button" className="btn btn-info">Siguiente</button>}
		</div>
	)
}

export default Paginacion