import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import DashBoard from './components/DashBoard.jsx'
import Containers from './components/Containers.jsx'
var Menu = require('react-burger-menu').push;
import { connect } from 'react-redux'
import {test,getDockerProcess}  from './actions/actions'
import store from './configureStore.js'

const Stores=store()
var App = React.createClass({
	componentWillMount: function() {
				Stores.dispatch(getDockerProcess())

	},
	render: function(){
		const {dispatch,test} = this.props
		console.log(test)
		return(
			<div id="nav">
			<Menu pageWrapId={"page-wrap"} outerContainerId={"nav"}>

				<div><Link className="menu-item"  to="/">DashBoard</Link></div>
				<div><Link className="menu-item"  to="/Containers">Containers</Link></div>
			</Menu>
			<div id="page-wrap">
			<div id="title" className="title-top">Docker Manager</div>
				{this.props.children}
			</div>
			</div>
		)
	}
})

function select(state){
	return {
		test : state.arithmetic.test
	}
}

export default connect(select)(App)