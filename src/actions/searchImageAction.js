import axios from 'axios';

const fetchSearchImagesRequest = () => {
	return {
		type: "fetch_search_images_request"
	}
}

const fetchSearchImagesSuccess = (payload, page, search, totalImages) => {
	return {
		type: "fetch_search_images_success",
		payload,
		page,
		search,
		totalImages
	}
}

const fetchSearchImagesFailure = error => {
	return {
		type: "fetch_search_images_failure",
		error
	}
}

const fetchSearchImagesClearSuccess = () => {
	return {
		type: "fetch_search_images_clear_success",
	}
}

export const fetchSearchImages = (value, page) => {

	return async dispatch => {
		try {
			dispatch(fetchSearchImagesRequest());

			const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${value}
		 	&per_page=20&page=${page}`;

			let response = await axios.get(url);

			dispatch(fetchSearchImagesSuccess(response.data.hits, page, value, response.data.total));

		} catch (error) {
			dispatch(fetchSearchImagesFailure(error));
		}
	}
}

export const fetchSearchImagesClear = () => {
	return dispatch => {
		dispatch(fetchSearchImagesClearSuccess());
	}
}