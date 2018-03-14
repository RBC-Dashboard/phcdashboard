function generateHighchartRose(dashletId, chartType, dataRows, title, chartMenu){
    var chartObject = getHighchartObject(chartType);
    chartObject.exporting.buttons.contextButton.menuItems = chartMenu;
    if (dataRows !== undefined){
        chartObject.title.text = title;
        chartObject.xAxis.categories = dataRows[0];
        dataRows.splice(0,1);

        chartObject.series = highchartsSeriesData(dataRows);
        Highcharts.chart(dashletId, chartObject);
    }
    Highcharts.chart(dashletId, chartObject);
}