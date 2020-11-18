
import React from 'react'
import { createBrowserHistory } from "history";
import ContenedorBuscador from './contenedores/contenedorBuscadorImagen'
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

class Routes extends React.Component {
    constructor(props) {
        super(props);
      }
	render() {
        const hist = createBrowserHistory();
		return (
				<Switch>
				<Route
					path="/hola"
					component={ContenedorBuscador}
					/>
				</Switch>
		)
	}
}


export const RoutesContainer = withRouter(Routes);