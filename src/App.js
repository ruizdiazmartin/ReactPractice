import React from 'react';
import store from './store';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { RoutesContainer } from './routes';
import { Router, Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

const hist = createBrowserHistory();

function App() {
	return (
		<Provider store={store}>
			<Router history={hist} >
			<RoutesContainer />
			</Router>
		</Provider>
	)
}

export default App