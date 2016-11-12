var React = require('react');
var BarChart = require("react-chartjs").Bar;

	var random = function(){ return Math.round(Math.random()*95)};

var DockerDashBoardChart = React.createClass({
	render : function(){
		var chartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
						fillColor : "#0088ff",
						strokeColor : "rgba(0,0,0,0)",
						highlightFill: "#0070ff",
						data: [random(), random(), random(), random(), random(), random(), random()]
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
			<div>
			<BarChart className="" data={chartData} options={chartOptions} width={100} height={100} />
			</div>
			) 
	}
})

export default DockerDashBoardChart; 