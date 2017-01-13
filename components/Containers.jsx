import React from 'react'
import DockerContainerList from './DockerContainerList.jsx'
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



var Containers = React.createClass({
	render : function(){
		return (
			<div>
				<BootstrapTable data={this.props.dockerps} striped hover>
				    <TableHeaderColumn isKey dataField='Command'>Command</TableHeaderColumn>
				    <TableHeaderColumn dataField='Names'>Name</TableHeaderColumn>
				    <TableHeaderColumn dataField='State'>State</TableHeaderColumn>
				    <TableHeaderColumn dataField='Status'>Status</TableHeaderColumn>
				    <TableHeaderColumn dataField='Image'>Image</TableHeaderColumn>
				    <TableHeaderColumn dataField='Labels["com.docker.swarm.service.name"]'>Swarm Name</TableHeaderColumn>

				</BootstrapTable>
			</div>
			)
	}

})

const mapStateToProps = (state) => {
	return {
		dockerps:state.docker.dockerps
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}
const MyContainers = connect(mapStateToProps, mapDispatchToProps)(Containers);


export default MyContainers