import React from 'react'
import SingleDockerPS from './SingleDockerPS.jsx'
import DockerBadger from './DockerBadger.jsx'
import {getDockerImages} from '../actions/actions'

var DockerServiceContainer = React.createClass({
componentDidMount(){

}
	,
	render(){
		const dockerInfoData = this.props.data || ""
		console.log(dockerInfoData.length +"mohan")
		return(
			<div className="height-100" >			
				<div className="widget-background">
				
						<div className="widgetHeading">{this.props.name}</div>
						<table className="widgetTable">
						<tbody>
						<tr><td><div className="widgetTextLabel">Number of Services</div></td><td><div className="widgetDataNumber">{this.props.data.length}</div></td></tr>
						</tbody>
						</table>


</div>
			</div>			)
	}
})

export default DockerServiceContainer