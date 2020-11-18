
import React from 'react'
import { createBrowserHistory } from "history";
import ContenedorBuscador from './containers/conteinerSearchImage'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

class Routes extends React.Component {
    constructor(props) {
		super(props);
		debugger;
      }
	render() {
		var val = this.props;
		debugger
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