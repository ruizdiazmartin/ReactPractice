
import React from 'react'
import { createBrowserHistory } from "history";
import ContenedorBuscador from './containers/conteinerSearchImage'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

class Routes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var val = this.props;
		return (
			<Switch>
				<Route
					path="/"
					component={ContenedorBuscador}
				/>
			</Switch>
		)
	}
}


export const RoutesContainer = withRouter(Routes);