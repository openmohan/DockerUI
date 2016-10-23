import React from 'react'

var SingleDockerPS = React.createClass({
	render : function(){
		return(
			<div>
			{this.props.data.Id}
			Status is 
			{this.props.data.State}
			</div>
			)
	}
})

export default SingleDockerPS