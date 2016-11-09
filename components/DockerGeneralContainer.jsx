import React from 'react'
import SingleDockerPS from './SingleDockerPS.jsx'
import DockerBadger from './DockerBadger.jsx'
import {getDockerImages} from '../actions/actions'

var DockerGeneralContainer = React.createClass({
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
						<tr><td><div className="widgetTextLabel">Number of Images</div></td><td><div className="widgetDataNumber">{dockerInfoData.Images}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Operating System</div></td><td><div className="widgetDataText">{dockerInfoData.OperatingSystem}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Kernal Version</div></td><td><div className="widgetDataText">{dockerInfoData.KernelVersion}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Total Memory</div></td><td><div className="widgetDataText">{dockerInfoData.MemTotal}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Number of CPU</div></td><td><div className="widgetDataNumber">{dockerInfoData.NCPU}</div></td></tr>
						</tbody>
						</table>


</div>
			</div>			)
	}
})

export default DockerGeneralContainer