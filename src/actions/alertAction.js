export const ACTIVATE_DESACTIVATE_ALERT = state => {
	return {
		type: "UPDATE_SHOW_ALERT",
		payload: state
	}
}

export const UPDATE_TEST_ALERT = state => {
	return {
		type: "SET_TEXT_ALERT",
		payload: state
	}
}

//Patron Redux.

//Los actions: Deben ser los mas simples posibles y tienen solo dos propiedades (type y payload)
//type: Nos dice cual es la accion que debe realizar.
//payload: Es opcional ya que no siempre debemos enviar info para realizar una accion y debemos enviar la menor cantidad de info posible para realizar una tarea.