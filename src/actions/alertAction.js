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