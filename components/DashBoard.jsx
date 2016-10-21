import React from 'react'
import {test,getDockerProcess} from '../actions/actions'
import rawStore from '../configureStore.js'

const store=rawStore()

var DashBoard = React.createClass({
	componentWillMount : function(){
		store.dispatch(getDockerProcess())
	},
	componentDidMount : function(){

	}
	,
	render : function(){
		var state = store.getState();
		var dockerps = state.docker.dockerps
		return (
				<div><h1>{dockerps}</h1></div>
			)
	}

})

export default DashBoard