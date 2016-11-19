var React = require('react');
import {HorizontalBar} from 'react-chartjs-2';

	var random = function(){ return Math.round(Math.random()*95)};

var DockerTxUtilization = React.createClass({
	render : function(){
		var labels = [];
		var dataSet = [];
		var chartcontentdata=[];
		var datasetsingle = {};
		var data = this.props.data || [];
		data.forEach(function(data){
			var lab = data.containerID.Id;
			lab = lab.slice(0,5)
			labels.push(lab);
			chartcontentdata.push(data.networks.tx_bytes);
			datasetsingle = {label : lab,data :data.networks.tx_bytes }
			dataSet.push(datasetsingle);
		})

		var BarChartdata = {
		  labels: labels,
		  datasets: [
		    {
		      label: 'Network Tx Utilization',
		      backgroundColor: '#89C4F4',
		      borderColor: '#4183D7',
		      borderWidth: 1,
		      hoverBackgroundColor: '#0199d9',
		      hoverBorderColor: '#19B5FE',
		      data: chartcontentdata
		    }
		  ]
		};
		var chartOptions =  {
			        		responsive:true,
							animation: false,
							showScale: true,
							scaleShowGridLines : false,
							barShowStroke: false,
							tooltipXPadding: 10,
							tooltipYPadding: 6,
							tooltipFontSize: 18,
							tooltipFontStyle: 'bold',
							maintainAspectRatio: true

		   }
		return(
		
			<HorizontalBar data={BarChartdata} options={chartOptions} />			
			) 
	}
})

export default DockerTxUtilization; 
