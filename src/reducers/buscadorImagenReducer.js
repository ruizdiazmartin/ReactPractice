const initialProps = {
	isFetching: false,
	images: null,
	error: null,
	page: null,
	search: null,
	totalImages: null

}

export default function (state = initialProps, action) {

	switch (action.type) {
		case "fetch_search_images_request":
			return {
				...state,
				isFetching: true
			}
		case "fetch_search_images_success":
			return {
				...state,
				isFetching: false,
				images: action.payload,
				page: action.page,
				search: action.search,
				totalImages: action.totalImages
			}
		case "fetch_search_images_failure":
			return {
				...state,
				isFetching: false,
				error: action.error
			}

		default:
			return state;
	}

}