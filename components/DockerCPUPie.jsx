import React from 'react';
import {Pie} from 'react-chartjs-2';


var DockerCPUPie =  React.createClass({
  displayName: 'PieExample',

  render() {
  	var labels = [];
  	var chartcontentdata = [];
  	var data = this.props.data || [];
  	data.forEach(function(data){
  		var lab = data.containerID.Id;
  		lab = lab.slice(0,5)
  		labels.push(lab);
  		chartcontentdata.push(data.cpu.totalUsage);
  	})
  	const chartData = {
  		labels: labels,
  		datasets: [{
  			data: chartcontentdata,
  			backgroundColor: [
  			'#FF6384',
  			'#36A2EB',
  			'#FFCE56',
  			'#e74c3c',
  			'#2ecc71'
  			],
  			hoverBackgroundColor: [
  			'#FF6384',
  			'#36A2EB',
  			'#FFCE56',
  			'#e74c3c',
  			'#2ecc71'
  			],
	      label: 'Memory Utilization',

  		}]
  	};
    return (
      <div>
      Memory Utilization
        <Pie data={chartData} />
      </div>
    );
  }
});

export default DockerCPUPie;