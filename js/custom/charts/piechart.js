function generatePichart(id, data, title) {
	var DimChart = setExploreSize(id);

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			columns: data,
			type: 'donut',
			onclick: function (d, i) {
				console.log("onclick", d, i);
			},
			onmouseover: function (d, i) {
				console.log("onmouseover", d, i);
			},
			onmouseout: function (d, i) {
				console.log("onmouseout", d, i);
			}
		},
		donut: {
			title: title
		}
	});
}

function generateHighchartPiechart(dashletId, chartType, dataRows, title, chartMenu){
	var chartObject = getHighchartObject(chartType);
	chartObject.exporting.buttons.contextButton.menuItems = chartMenu;
	if (dataRows !== undefined){
		chartObject.title.text = title;
		var pieData = highchartsSeriesData(dataRows, chartType);
		chartObject.series = pieData;
		Highcharts.chart(dashletId, chartObject);
	}
}