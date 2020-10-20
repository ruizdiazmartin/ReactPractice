
const initialProps = {
	isFetching: false,
	image: null,
	error: null
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
					image: action.payload
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