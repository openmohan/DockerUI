import React from 'react'
import SingleDockerPS from './SingleDockerPS.jsx'

var DockerPSContainer = React.createClass({
	render(){
		const dockerPSData = this.props.data 
		console.log(dockerPSData)
		return(
			<div className="dockerPSContainer">
						<h2>Docker Process</h2>

			{dockerPSData?dockerPSData.map((data,index)=><SingleDockerPS data={data} key={index} />):"ss"}
			</div>
			)
	}
})

export default DockerPSContainer