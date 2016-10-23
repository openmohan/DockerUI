import React from 'react'
import {test,getDockerProcess} from '../actions/actions'
import rawStore from '../configureStore.js'
import { connect } from 'react-redux'
import DockerPSContainer from './DockerPSContainer.jsx'


const store=rawStore()

var DashBoard = React.createClass({
	componentWillMount : function(){
		this.props.dispatch(getDockerProcess())
			},
	render : function(){
				var data = this.props.data.dockerps || ""
				// setTimeout(function(){var datas = store.getState();console.log(datas)},2000)

		return (
				<div class="container">
				<div class="row one-row-dashboard">
				<DockerPSContainer className="col-md-3"  data={data} ></DockerPSContainer>
				<DockerPSContainer className="col-md-3"  data={data} ></DockerPSContainer>
				<DockerPSContainer className="col-md-3"  data={data} ></DockerPSContainer>

				</div>
								<div class="row one-row-dashboard">
				<DockerPSContainer className="col-md-3"  data={data} ></DockerPSContainer>
				<DockerPSContainer className="col-md-3"  data={data} ></DockerPSContainer>
				<DockerPSContainer className="col-md-3"  data={data} ></DockerPSContainer>

				</div>


				</div>
			)
	}

})


export default DashBoard