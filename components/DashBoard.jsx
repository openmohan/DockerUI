import React from 'react'
import {test,getDockerProcess,getDockerImages,getDockerInfo,getDockerServiceInfo,getDashBoardKPIData} from '../actions/actions'
import rawStore from '../configureStore.js'
import { connect } from 'react-redux'
import DockerPSContainer from './DockerPSContainer.jsx'
import DockerInfoContainer from './DockerInfoContainer.jsx'
import DockerNodeContainer from './DockerNodeContainer.jsx'
import DockerGeneralContainer from './DockerGeneralContainer.jsx'
import DockerServiceContainer from './DockerServiceContainer.jsx'
import DockerDashBoardChart from './DockerDashBoardChart.jsx'



const store=rawStore()
var DashBoard = React.createClass({
	componentWillMount : function(){
		
		this.props.dispatch(getDockerProcess())
		this.props.dispatch(getDockerImages())
		this.props.dispatch(getDockerInfo())
		this.props.dispatch(getDockerServiceInfo())
		this.props.dispatch(getDashBoardKPIData())

			},
			 reactiveDashboard :function(){
				this.props.dispatch(getDockerImages())
			},
			componentDidMount : function(){
				// reactiveDashboard = setInterval(this.reactiveDashboard,1000)
			},
			componentWillUnmount : function(){
				console.log("ss")
				clearInterval(reactiveDashboard)
			}
			,
	render : function(){
				var dockerPSdata = this.props.data.dockerps || ""
				var dockerImagesData = this.props.data.dockerimages || ""
				var dockerinfo = this.props.data.dockerinfo || ""
				var dockerservices = this.props.data.dockerservices || "" 
				var dockerdashboardchartdata = this.props.data.dockerdashboardchart || ""
				console.log(dockerinfo)
				// setTimeout(function(){var datas = store.getState();console.log(datas)},2000)

		return (
				<div className="container height-100 width-100 ">
				<div className="row margin-align height-50">
				<div className="col-md-4 margin-top-25 height-100"><DockerInfoContainer  name="Containers"  data={dockerinfo} ></DockerInfoContainer></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerNodeContainer name="Nodes"  data={dockerinfo} ></DockerNodeContainer></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerGeneralContainer name="Info" dispatch={this.props.dispatch} data={dockerinfo} ></DockerGeneralContainer></div>


				</div> 
				<div className="row margin-align height-50 ">
				<div className="col-md-4 margin-top-25 height-100"><DockerServiceContainer  name="Swarms"  data={dockerservices} ></DockerServiceContainer></div>
				<div className="col-md-4 margin-top-25 "><DockerDashBoardChart   data={dockerPSdata} ></DockerDashBoardChart></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerDashBoardChart   data={dockerPSdata} ></DockerDashBoardChart></div>

				</div>


				</div>
			)
	}

})


export default DashBoard