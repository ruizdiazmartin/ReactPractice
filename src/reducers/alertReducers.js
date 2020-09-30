const initalProps = {
	showAlert: false,
	textAlert: "Martin"
}

export default function (state = initalProps, action) {

	switch (action.type) {
		case "UPDATE_SHOW_ALERT":
			return {
				...state,
				showAlert: action.payload
			}

		case "SET_TEXT_ALERT":
			return {
				...state,
				textAlert: action.payload
			}
		default:
			return state
	}
}

//Patron Redux.

//Los reducers: Son una funcion que recibe solo dos parametros (oldState, action) y siempre retorna un nuevo estado.
