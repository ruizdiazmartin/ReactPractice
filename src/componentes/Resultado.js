import React from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion'


export default function Resultado({ imagesReducers, pagePreviu, pageNext }) {

	if (imagesReducers.images === null) return null;

	return (
		<div>
			<div className="col-12 p-5 row">
				{imagesReducers.images.map(image => (
					<Imagen
						key={image.id}
						image={image}
					/>
				))}
			</div>
			<Paginacion
				page={imagesReducers.page}
				pagePreviu={pagePreviu}
				pageNext={pageNext}
				lastPage={imagesReducers.lastPage}
			/>
		</div>
	)
}


