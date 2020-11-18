
import React from 'react'
import { createBrowserHistory } from "history";
import ContenedorBuscador from './containers/conteinerSearchImage'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

class Routes extends React.Component {
    constructor(props) {
		super(props);
      }
	render() {
		return (
				<Switch>
				<Route
					pathname="/buscador"
					component={ContenedorBuscador}
					/>
				<Redirect
					exact
					from="/"
					to="/buscador"
        		/>
				</Switch>
		)
	}
}


export const RoutesContainer = withRouter(Routes);