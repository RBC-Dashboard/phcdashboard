function generateLine(id, data) {
	var DimChart = setExploreSize(id)
	
	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			x: 'x',
			xFormat: '%Y',
			columns: data,
			type: 'spline'
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y'
				}
			}
		},
		grid: {
			y: {
				lines: [

				{
					value: 350,
					text: 'target',
					position: 'middle'
				}
				]
			}
		}
	});
}

function generateHighchartLine(dashletId, chartType, dataRows, title, chartMenu){
	var chartObject = getHighchartObject(chartType);
	var symbolMarker = {symbol: 'circle'};
	chartObject.exporting.buttons.contextButton.menuItems = chartMenu;
	if (dataRows !== undefined){
		chartObject.title.text = title;
		chartObject.xAxis.categories = dataRows[0];
		dataRows.splice(0,1);
		var lineData = highchartsSeriesData(dataRows);

		for (var i = 0; i < lineData.length; i++){
			var obj = lineData[i];
			obj.marker = symbolMarker;
		}
		chartObject.series = lineData;
		Highcharts.chart(dashletId, chartObject);
	}
}