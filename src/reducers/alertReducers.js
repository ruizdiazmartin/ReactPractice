const initalProps = {
	showAlert: false,
	textAlert: " Hola Martin"
}

export default function (state = initalProps, action) {

	switch (action.type) {
		case "UPDATE_SHOW_ALERT":
			return {
				//Mi estado anterior
				...state,
				//Agrego una nueva tarea a mi estado
				showAlert: action.payload
			}

		case "SET_TEXT_ALERT":
			return {
				//Mi estado anterior
				...state,
				//Agrego una nueva tarea a mi estado
				textAlert: action.payload
			}
		default:
			//retorno el estado tal cual lo recibimos en el metodo sin modificar nada.
			return state
	}
}

//Patron Redux.

//Los reducers: Son una funcion que recibe solo dos parametros (oldState, action) y siempre retorna un nuevo estado.
