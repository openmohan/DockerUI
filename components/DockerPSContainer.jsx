import React from 'react'
import SingleDockerPS from './SingleDockerPS.jsx'
import DockerBadger from './DockerBadger.jsx'
import {getDockerImages} from '../actions/actions'

var DockerPSContainer = React.createClass({
componentDidMount(){

}
	,
	render(){
		const dockerPSData = this.props.data 
		//console.log(dockerPSData.length)
		return(
			<div className="height-100" >			
				<div className="widget-background">
				
						{this.props.name}
						<DockerBadger data={dockerPSData.length}></DockerBadger>




</div>
			</div>			)
	}
})

export default DockerPSContainer