const initialProps = {
	isFetching: false,
	images: null,
	error: null,
	page: null,
	search: null,

}

export default function (state = initialProps, action) {

	switch (action.type) {
		case "fetch_search_images_request":
			return {
				...state,
				isFetching: true
			}
<<<<<<< HEAD
		case "fetch_search_images_success":
			return {
				...state,
				isFetching: false,
				image: action.payload
			}
		case "fetch_search_images_failure":
			return {
				...state,
				isFetching: false,
				error: action.error
			}
=======
			case "fetch_search_images_success":
				return {
					...state,
					isFetching: false,
					images: action.payload,
					page: action.page,
					search: action.search,
				}
			case "fetch_search_images_failure":
					return {
						...state,
						isFetching: false,
						error: action.error
					}
>>>>>>> 6cbd81f47aa8694e8c27d441728e802f0a079d8b

		default:
			return state;
	}

}