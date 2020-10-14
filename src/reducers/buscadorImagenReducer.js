const initialProps = {
	showImage: false,
	textImage: "Futbol por default"
}

export default function (state = initialProps, action) {

	switch (action.type) {
		case "SET_IMAGEN":
			return {
				...state,
				showImage: action.payload
			}

		default:
			return state;
	}

}