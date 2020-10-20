
import axios from 'axios';

const fetchSearchImagesRequest = () => {
	return {
		type: "fetch_search_images_request",
	}
}

const fetchSearchImagesSuccess = payload => {
	return {
		type: "fetch_search_images_success",
		payload
	}
}

const fetchSearchImagesFailure = error => {
	return {
		type: "fetch_search_images_failure",
		error
	}
}

export const fetchSearchImages = value => {
	return async dispatch => {
		try {
			dispatch(fetchSearchImagesRequest());
		
		 const pagina = 1;
		 const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${value}
		 	&per_page=20&page=${pagina}`;
	
		 let result1 = await axios.get(url);
		
		dispatch(fetchSearchImagesSuccess(result1.data.hits));
	
		} catch (error) {
			dispatch(fetchSearchImagesFailure(error));
		  }
	}

}