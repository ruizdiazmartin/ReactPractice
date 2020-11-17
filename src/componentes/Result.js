import React from 'react';
import Imagen from './Imagen';
import Pagination from './Pagination'


export default function Result({ imagesReducers, pagePreviu, pageNext }) {

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
			<Pagination
				page={imagesReducers.page}
				pagePreviu={pagePreviu}
				pageNext={pageNext}
				lastPage={imagesReducers.lastPage}
			/>
		</div>
	)
}


