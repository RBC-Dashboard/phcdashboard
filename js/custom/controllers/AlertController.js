'use strict';

angular.module('alert.controllers', ['rbc.services', 'alert.services'])

.controller("alertController", function ($scope, $location, dashboardService, generateAnalyticService) {

	//var dashboardName = 'ALERTS';
	var splitLink = $location.absUrl().split('/');
	var selectedDivision = splitLink[splitLink.length - 1];
	var dashboardName = DIVISION_ALERTS[selectedDivision];

	dashboardService.getDashboards(baseURL).get({
		dashboard: dashboardName
	}, function (alertsDashlets) {
		//
		var numberDashlets = alertsDashlets.dashlets.length;
		//var rows = dashboardRows(numberDashlets);
		var dashlets = alertsDashlets.dashlets;

		for (var d = 0; d < 7; d++) {
			//$scope.title = dashlets[d].title;
			var currentDataValueLink = baseURL+dashlets[d].currentDataValue;//+analyticsConfigFilterOu;
			var previousDataValueLink = baseURL+dashlets[d].previousDataValue;//+analyticsConfigFilterOu;
			var targetValueLink = baseURL+dashlets[d].targetValue;//+analyticsConfigFilterOu;
			var chartTitle = dashlets[d].title;
			var dashletUid = dashlets[d].id;
			var performance = dashlets[d].performance;
			var alertType = dashlets[d].iconSet.toLowerCase();

			var alertName = angular.element( document.querySelector( '#alertname'+d ) );
			alertName.append(chartTitle);
			$("#alert-box"+d).attr("title", chartTitle);

			var generateAnalytics = function (currentDataValueLink, previousDataValueLink, targetValueLink, title, uid, d, alertType, performance) {

				var currentValues = generateAnalyticService.getData(currentDataValueLink).get({}, function (data) {
					var alertValue = angular.element( document.querySelector( '#alertvalue'+d ) );
					var currentValue = data.rows[0][2];
					alertValue.append(currentValue);

                    if (alertType === 'yesno'){
                        generateAnalyticService.getData(targetValueLink).get({}, function (dataTar) {
                            var valueCurrent = currentValue;

                            calculateAlert(d, alertType, performance, parseFloat(valueCurrent), 0, parseFloat(dataTar.rows[0][2]));
                        });
                    }
                    else{
                        generateAnalyticService.getData(previousDataValueLink).get({}, function (dataPre) {
                            var valueCurrent = currentValue;
                            var previousValue = dataPre.rows[0][2];

                            generateAnalyticService.getData(targetValueLink).get({}, function (dataTar) {

                                calculateAlert(d, alertType, performance, parseFloat(valueCurrent), parseFloat(previousValue), parseFloat(dataTar.rows[0][2]));
                            });
                        });
                    }



				});
			};
			generateAnalytics(currentDataValueLink, previousDataValueLink, targetValueLink, chartTitle, dashletUid, d, alertType, performance);
		}
	});
});