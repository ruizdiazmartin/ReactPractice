
import axios from 'axios';

const fetchSearchImagesRequest = () => {
	return {
		type: "fetch_search_images_request",
	}
}

const fetchSearchImagesSuccess = (payload, page, search) => {
	return {
		type: "fetch_search_images_success",
		payload,
		page,
		search
	}
}

const fetchSearchImagesFailure = error => {
	return {
		type: "fetch_search_images_failure",
		error
	}
}

export const fetchSearchImages = (value, page) => {
	return async dispatch => {
		try {
			dispatch(fetchSearchImagesRequest());
			
		 const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${value}
		 	&per_page=20&page=${page}`;
	
		 let result1 = await axios.get(url);
		
		dispatch(fetchSearchImagesSuccess(result1.data.hits, page, value));
	
		} catch (error) {
			dispatch(fetchSearchImagesFailure(error));
		  }
	}

}