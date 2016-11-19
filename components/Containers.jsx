import React from 'react'
import DockerContainerList from './DockerContainerList.jsx'
var Containers = React.createClass({
	render : function(){
		return (
			<div>
				<DockerContainerList></DockerContainerList>
			</div>
			)
	}

})

export default Containers