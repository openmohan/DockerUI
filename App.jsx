import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import DashBoard from './components/DashBoard.jsx'
import Containers from './components/Containers.jsx'
var Menu = require('react-burger-menu').push;
import { connect } from 'react-redux'
import {test,getDockerProcess}  from './actions/actions'
import stores from './configureStore.js'


var App = React.createClass({
	componentDidMount : function(){
	},
	render: function(){
		const {dispatch,test} = this.props
		return(
			<div id="nav " className="height-100">
			<Menu pageWrapId={"page-wraps"} outerContainerId={"nav"}>

				<div><Link className="menu-item blue-Highligher"  to="/DashBoard"><i className="glyphicon glyphicon-dashboard "></i><span className="icon-title-Seperator">DashBoard</span></Link></div>
				<div><Link className="menu-item blue-Highligher"  to="/Containers"><i className="	glyphicon glyphicon-equalizer "></i><span className="icon-title-Seperator">Containers</span></Link></div>
			</Menu>
			<div id="page-wraps" className="AppBackgroundColor height-100">
			<div id="docker-title" className="docker-title-top">Docker Manager</div>
				{this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:dispatch  }) }
			</div>
			</div>
		)
	}
})

function select(State){
	return {
		test : State.arithmetic.test,
		dockerps : State.docker.dockerps,
		dockerimages:State.docker.dockerimages,
		dockerinfo:State.docker.dockerinfo,
		dockerservices:State.docker.dockerservices,
		dockerdashboardchart : State.docker.dockerdashboardchart
	}
}

export default connect(select)(App)