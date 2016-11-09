import React from 'react'
import SingleDockerPS from './SingleDockerPS.jsx'
import DockerBadger from './DockerBadger.jsx'
import {getDockerImages} from '../actions/actions'

var DockerNodeContainer = React.createClass({
componentDidMount(){

}
	,
	render(){
		const dockerSwarmData = this.props.data.Swarm || ""
		// console.log(dockerSwarmData)
		return(
			<div className="height-100" >			
				<div className="widget-background">
				
						<div className="widgetHeading">{this.props.name}</div>
						<table className="widgetTable">
						<tbody>
						<tr><td><div className="widgetTextLabel">Managers</div></td><td><div className="widgetDataNumber">{dockerSwarmData.Managers || ""}</div></td></tr>
						<tr><td><div className="widgetTextLabel">Workers</div></td><td><div className="widgetDataNumber">{dockerSwarmData.Nodes - dockerSwarmData.Managers || "" }</div></td></tr>
						<tr><td><div className="widgetTextLabel">Total Nodes</div></td><td><div className="widgetDataNumber">{dockerSwarmData.Nodes || ""}</div></td></tr>
						</tbody>
						</table>


</div>
			</div>			)
	}
})

export default DockerNodeContainer