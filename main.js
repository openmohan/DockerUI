import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import DashBoard from './components/DashBoard.jsx'
import Containers from './components/Containers.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

let store = configureStore()


ReactDOM.render(
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path='/' component={App}>
					         <IndexRoute component = {DashBoard} />

         			<Route path = 'DashBoard' component = {DashBoard} />
         			<Route path = 'Containers' component = {Containers} />
					</Route>
				</Router>
				</Provider>
	, document.getElementById("app"));