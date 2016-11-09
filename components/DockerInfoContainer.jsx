import React from 'react'
import SingleDockerPS from './SingleDockerPS.jsx'
import DockerBadger from './DockerBadger.jsx'
import {getDockerImages} from '../actions/actions'

var DockerInfoContainer = React.createClass({
componentDidMount(){

}
	,
	render(){
		const dockerInfoData = this.props.data 
		console.log(dockerInfoData.length)
		return(
			<div className="height-100" >			
				<div className="widget-background">
				
						<div className="widgetHeading">{this.props.name}</div>
						<table className="widgetTable">
						<tbody>
						<tr><td><div className="widgetTextLabel">Running</div></td><td><div className="widgetDataNumber">{dockerInfoData.ContainersRunning}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Paused</div></td><td><div className="widgetDataNumber">{dockerInfoData.ContainersPaused}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Stopped</div></td><td><div className="widgetDataNumber">{dockerInfoData.ContainersStopped}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Total</div></td><td><div className="widgetDataNumber">{dockerInfoData.Containers}</div></td></tr>
						</tbody>
						</table>


</div>
			</div>			)
	}
})

export default DockerInfoContainer