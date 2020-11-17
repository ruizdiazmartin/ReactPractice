import React from 'react'

const Pagination = ({ page, pagePreviu, pageNext, lastPage }) => {

	return (
		<div className="py_3">
			{page === 1 ? null : <button onClick={pagePreviu} type="button" className="btn btn-info mr-1">Previus</button>}
			{page === lastPage ? null : <button onClick={pageNext} type="button" className="btn btn-info">Next</button>}
		</div>
	)
}

export default Pagination