import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import DashBoard from './components/DashBoard.jsx'
import Containers from './components/Containers.jsx'

ReactDOM.render(

				<Router history={browserHistory}>
					<Route path='/' component={App}>
					         <IndexRoute component = {DashBoard} />

         			<Route path = 'DashBoard' component = {DashBoard} />
         			<Route path = 'Containers' component = {Containers} />
					</Route>
				</Router>
	, document.getElementById("app"));