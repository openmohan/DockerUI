import React from 'react'

var DockerBadger = React.createClass({
	render : function(){
		return(

			<div style={{"marginTop": "18%"}}>
	
			{this.props.data}
			
			</div>
			)
	}
})

export default DockerBadger