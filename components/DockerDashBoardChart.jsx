var React = require('react');
var BarChart = require("react-chartjs").Bar;

	var random = function(){ return Math.round(Math.random()*95)};

var DockerDashBoardChart = React.createClass({
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
			chartcontentdata.push(data.networks.rx_bytes);
			datasetsingle = {label : lab,data :data.networks.rx_bytes }
			dataSet.push(datasetsingle);
		})
		console.log(labels);
		console.log(chartcontentdata);
		var chartData = {
			labels : labels,
			datasets : [
				{		
						fillColor : "#0088ff",
						strokeColor : "rgba(0,0,0,0)",
						highlightFill: "#0070ff",
						data: chartcontentdata
				}
			]
		};
		var data = {
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [
		        {
		            label: "My First dataset",
		            borderWidth: 1,
		            data: [65, 59, 80, 81, 56, 55, 40],
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
							tooltipFontStyle: 'bold'
							// maintainAspectRatio: true

		   }
		return(
		
			<BarChart className="" data={chartData} options={chartOptions} type="horizontalBar" width={100} height={80} />
			
			) 
	}
})

export default DockerDashBoardChart; 