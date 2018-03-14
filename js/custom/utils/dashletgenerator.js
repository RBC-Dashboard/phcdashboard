function generateVisualization(dashletId, chartType, data, title, level, dashboardName, dataLink, exploreLink){
	var dataRows = [];
	var tableDataElements = [];

	switch(chartType){
		case 'map':
			console.debug(dashletId+' and map '+title);
			break;
		case 'table':
			tableDataElements = data.metaData.dx;
			dataRows = createTabularData(data.rows);
			break;
		default:
			dataRows = parseTableLayout(data, level);
	}
	var exploreMenu = {
		text: 'Explore',
		onclick: function () {
			window.location.href = "#/explore/"+dashboardName+"/"+chartType+"/"+dashletId;
		}
	};
	var exploreTableMenuObj = {
		text: 'Explore',
		link: "#/explore/"+dashboardName+"/"+chartType+"/"+dashletId
	};
	var chartMenu = [
		{
			text: 'Download',
			onclick: function(){
				this.exportChart();
			}
		}
	];
	if (dashboardName.toLowerCase() !== 'drilldown')
		chartMenu.push(exploreMenu);

	switch(chartType){
		case 'bar':
			generateHighchartBar(dashletId, chartType, dataRows, title, chartMenu);
			break;
		case 'tacho':
			//generateHighchartGauge(dashletId, chartType, dataRows);
			break;
		case 'pie':
			dataRows.splice(0,1);
			generateHighchartPiechart(dashletId, chartType, dataRows, title, chartMenu);
			break;
		case 'line':
			generateHighchartLine(dashletId, chartType, dataRows, title, chartMenu);
			break;
		case 'stacked':
			generateHighchartStackedBar(dashletId, chartType, dataRows, title, chartMenu);
			break;
		case 'table':
			if (dashboardName == 'drilldown'){
				if (level == 1){
					createPivot(dashletId, dataRows, tableDataElements);
				}
				else{
					var headers = ['Drugs'];
					var columns = data.headers;
					for (var i = 4; i < columns.length; i++){
						headers = headers.concat(columns[i].column);
					}
					var data = [headers, dataRows];
					createDrilledPivot(dashletId, data, tableDataElements)
				}
			}
			else{
				createPivot(dashletId, dataRows, tableDataElements);
				exploreTableMenu(dashletId, exploreTableMenuObj);
			}
			break;
		case 'rose':
			generateHighchartRose(dashletId, chartType, dataRows, title, chartMenu);
			break;
		case 'donut':
			dataRows.splice(0,1);
			generateHighchartPiechart(dashletId, chartType, dataRows, title, chartMenu);
			break;
        case 'map':
            embedGisMap(dashletId, exploreLink, dataLink);
            break;
	}
}