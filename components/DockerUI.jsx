import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import DashBoard from './DashBoard.jsx'
import Containers from './Containers.jsx'
import Menu from 'react-burger-menu'

var DockerUI = React.createClass({
	render: function(){
		return(
			<div className="nav">
			<ul>
				<Link>DashBoard</Link>
				<Link>Containers</Link>
			</ul>
				{this.props.children}
			</div>
		)
	}
})

export default DockerUI