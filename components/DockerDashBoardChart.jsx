var React = require('react');
var BarChart = require("react-chartjs").Bar;

	var random = function(){ return Math.round(Math.random()*95)};

var DockerDashBoardChart = React.createClass({
	render : function(){
		var labels = [];
		var chartcontentdata=[];
		var data = this.props.data || [];
		data.forEach(function(data){
			var lab = data.containerID.Id;
			lab = lab.slice(0,5)
			labels.push(lab);
			chartcontentdata.push(data.networks.rx_bytes);
		})
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
		
			<BarChart className="" data={chartData} options={chartOptions} chartType="horizontalBar" width={100} height={80} />
			
			) 
	}
})

export default DockerDashBoardChart; 