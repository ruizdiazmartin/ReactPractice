import React from 'react';
import Images from './Images';
import Pagination from './Pagination'


export default function Result({ imagesReducers, pagePreviu, pageNext }) {

	if (imagesReducers.images === null) return null;

	return (
		<div>
			<div className="col-12 p-5 row">
				{imagesReducers.images.map(image => (
					<Images
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


