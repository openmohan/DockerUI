import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import DashBoard from './components/DashBoard.jsx'
import Containers from './components/Containers.jsx'
var Menu = require('react-burger-menu').push;

var App = React.createClass({
	render: function(){
		return(
			<div id="nav">
			<Menu pageWrapId={"page-wrap"} outerContainerId={"nav"}>

				 <a id="home" className="menu-item" ><Link className="menu-item"  to="/">DashBoard</Link></a>
				<a id="home" className="menu-item" ><Link className="menu-item"  to="/Containers">Containers</Link></a>
			</Menu>
			<div id="page-wrap">
				{this.props.children}
			</div>
			</div>
		)
	}
})

export default App