
function getHighchartObject(chartType){
    switch(chartType){
        case 'bar':
            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'column',
                    height: 300
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                
                colors: ['#002060', '#0070C0', '#80CAFF', ],
                xAxis: {
                    categories: [],
                    tickColor: '#FF0000',
                    tickWidth: 0,
                    crosshair: true,
                    style:{
                        fontWeight: 'normal'
                    }
                },

                yAxis: {
                    min: 0,
                    gridLineColor: '#ffffff',
                    lineColor: '#d4d9da',
                    lineWidth: 2,
                    title: {
                        enabled: false
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table>',
                    pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
                                 '<td style="padding:0"> {point.y:.1f} </td></tr>',
                    footerFormat: '</table>',
                    useHTML: true
                },
                plotOptions: {
                    column: {
                    pointPadding: 0,
                    groupPadding: .09,
                    borderWidth: 0
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                    itemStyle:{
                        fontWeight:'normal'
                    }
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            //symbolX:40,
                            //symbolY:0,
                           // symbolSize: 8,
                            menuItems: []
                        }
                    }
                },
                series: []
            };

            return highChart;
            break;
        case 'tacho':
            console.debug('tacho');

            break;
        case 'pie':
            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'/*,
                    height: 155*/
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            menuItems: []
                        }
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        //innerSize: '30%', //transforms piechart to donut
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: []
            };

            return highChart;
            break;
        case 'donut':
            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    //height: 155
                },
                colors: ['#00b0f0', '#f2f2f2'],
                legend: {
                    enabled: false
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            menuItems: []
                        }
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },

                tooltip: {
                     headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table><br>',
                     pointFormat: '{series.name}: </td>' + '<td style="padding:.1">{point.y:.1f} </td></tr>',
            
                },
                plotOptions: {
                    pie: {
                        innerSize: '30%', //transforms piechart to donut
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: []
            };

            return highChart;
            break;
        case 'line':
            console.debug('line');
            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'line'
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    categories: [],
                    tickColor: '#FF0000',
                    tickWidth: 0,
                    style:{
                        fontWeight: 'normal'
                    }
                },
                
                colors: ['#002060', '#006652', '#75ffb3', '#b3a2c7', 
                         '#00b0f0', '#604a7b', '#403152'],
                yAxis: {
                    min: 0,                  
                    gridLineColor: '#ffffff',
                    lineColor: '#d4d9da',
                    lineWidth: 2,
                    title: {
                        text: '',
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                     headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table><br>',
                     pointFormat: '{series.name}: </td>' + '<td style="padding:.1">{point.y:.1f} </td></tr>',
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                    itemStyle:{
                        fontWeight:'normal'
                    }
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            menuItems: []
                        }
                    }
                },
                series: []
            };
            return highChart;

            break;
        case 'stacked':

            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'bar',
                    height: 190
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    categories: [],
                            tickColor: '#FF0000',
                            tickWidth: 0,
                            tickLength:0,
                            lineColor: '#d4d9da',
                            lineWidth: 0,
                            gridLineColor: '#ffffff',
                    style:{
                        fontWeight: 'normal'
                    }
                },
                
                colors: ['#403152', '#604a7b', '#b3a2c7', '#f2f2f2'],
                yAxis: {
                    min: 0,
                    lineColor: '#d4d9da',
                    lineWidth: 1,
                    gridLineColor: '#ffffff',
                    title: {
                        text: ''
                    },
                    stackLabels: {
                        enabled: false,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                legend: {
                    reversed: true,
                    itemStyle:{
                        fontWeight:'normal'
                    }
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            menuItems: []
                        }
                    }
                },
                tooltip: {
                     headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table><br>',
                     pointFormat: '{series.name}: </td>' +'<td style="padding:.1">{point.y:.1f} </td></tr>',
                          },
                
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        pointPadding: .05,
                        groupPadding: .05,
                        borderWidth: 0,
                        dataLabels: {
                            enabled: false,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                        }
                    }
                },
                series: []
            };

            return highChart;
            break;
            case 'stackedv':

            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'bar',
                    height: 190
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    categories: [],
                            tickColor: '#FF0000',
                            tickWidth: 0,
                            tickLength:0,
                            lineColor: '#d4d9da',
                            lineWidth: 0,
                            gridLineColor: '#ffffff',
                    style:{
                        fontWeight: 'normal'
                    }
                },
                
                colors: ['#403152', '#604a7b', '#b3a2c7', '#f2f2f2'],
                yAxis: {
                    min: 0,
                    lineColor: '#d4d9da',
                    lineWidth: 1,
                    gridLineColor: '#ffffff',
                    title: {
                        text: ''
                    },
                    stackLabels: {
                        enabled: false,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                legend: {
                    reversed: true,
                    itemStyle:{
                        fontWeight:'normal'
                    }
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            menuItems: []
                        }
                    }
                },
                tooltip: {
                     headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table><br>',
                     pointFormat: '{series.name}: </td>' +'<td style="padding:.1">{point.y:.1f} </td></tr>',
                          },
                
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        pointPadding: .05,
                        groupPadding: .05,
                        borderWidth: 0,
                        dataLabels: {
                            enabled: false,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                        }
                    }
                },
                series: []
            };

            return highChart;
            break;
        case 'pivot':
            console.debug('pivot');

            break;
        case 'map':
            //createMap();
            console.debug('map')
            break;

        case 'rose':
            console.debug('rose');
            var highChart = {
                credits: {
                    enabled: false
                },
                chart: {
                    polar: true,
                    type: 'column'
                },
                title: {
                    text: '',
                    align: 'left',
                    x: 10,
                    style: {
                        fontFamily: 'Calibri',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                colors: ['#00b0f0', '#002060', '#00b050', '#75ffb3', '#b3a2c7'],
                xAxis: {
                    categories: [],
                    crosshair: true,
                    style:{
                        fontWeight: 'normal'
                    }
                }/*,
                 yAxis: {
                 min: 0,
                 title: {
                 text: ''
                 }
                 }*/,
                tooltip: {
                    headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table>',
                    pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
                                 '<td style="padding:0"> {point.y:.1f} </td></tr>',
                    footerFormat: '</table>',
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                exporting: {
                    buttons:{
                        contextButton:{
                            symbol: 'url(img/icons/caret_down.png)',
                            menuItems: []
                        }
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                    itemStyle:{
                        fontWeight:'normal'
                    }
                },
                series: []
            };
            return highChart;
    }
}