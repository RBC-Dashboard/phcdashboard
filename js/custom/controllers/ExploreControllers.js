angular.module('explore.controllers', ['explore.services', 'rbc.services'])

.controller('exploreController', function ($scope, $routeParams, exploreService, generateAnalyticService, orgUnitLevelService, getOrgUnitsByLevelService, orgUnitService) {
	$scope.uidSelected = $routeParams.dashletId;
	var chartType = $routeParams.chartType;
	var dashboardSelected = $routeParams.dashboard;

	$scope.phctitle = "";
    $scope.iconName = "";
    var dashboardName = $routeParams.dashboard;

    switch(dashboardName){
        case 'PHC_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National Integrated PHC System";
            break;
        case 'PHC_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National Integrated PHC Inputs";
            break;
        case 'PHC_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National Integrated PHC Service Delivery";
            break;
        case 'PHC_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National Integrated PHC Coverage";
            break;
        case 'PHC_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National Integrated PHC Outcomes";
            break;



        case 'IHPDC_HIV_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National IHPDC HIV System";
            break;
        case 'IHPDC_HIV_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National IHPDC HIV INPUTS Inputs";
            break;
        case 'IHPDC_HIV_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National IHPDC HIV Service Delivery";
            break;
        case 'IHPDC_HIV_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National IHPDC HIV Coverage";
            break;
        case 'IHPDC_HIV_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National IHPDC HIV Outcomes";
            break;


        case 'IHPDC_MALARIA_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National IHPDC MALARIA System";
            break;
        case 'IHPDC_MALRIA_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National IHPDC MALRIA Inputs";
            break;
        case 'IHPDC_MALRIA_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National IHPDC MALRIA Service Delivery";
            break;
        case 'IHPDC_MALRIA_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National IHPDC MALRIA Coverage";
            break;
        case 'IHPDC_MALRIA_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National IHPDC MALRIA Outcomes";
            break;

        case 'IHPDC_MCHEPI_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National IHPDC MCH-EPI System";
            break;
        case 'IHPDC_MCHEPI_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National IHPDC MCHE-EPI Inputs";
            break;
        case 'IHPDC_MCHEPI_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National IHPDC MCH-EPI Service Delivery";
            break;
        case 'IHPDC_MCHEPI_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National IHPDC MCH-EPI Coverage";
            break;
        case 'IHPDC_MCHEPI_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National IHPDC MCH-EPI Outcomes";
            break;
    


        case 'IHPDC_TB_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National IHPDC TB System";
            break;
        case 'IHPDC_TB_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National IHPDC TB Inputs";
            break;
        case 'IHPDC_TB_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National IHPDC TB Service Delivery";
            break;
        case 'IHPDC_TB_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National IHPDC TB Coverage";
            break;
        case 'IHPDC_TB_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National IHPDC TB Outcomes";
            break;


        case 'MPPD_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates System";
            break;
        case 'MPPD_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Inputs";
            break;
        case 'MPPD_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Service Delivery";
            break;
        case 'MPPD_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Coverage";
            break;
        case 'MPPD_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Outcomes";
            break;


        case 'RHCC_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates System";
            break;
        case 'RHCC_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Inputs";
            break;
        case 'RHCC_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Service Delivery";
            break;
        case 'RHCC_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Coverage";
            break;
        case 'RHCC_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Outcomes";
            break;


        case 'MRC_SYSTEM':
            $scope.iconName = "System sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates System";
            break;
        case 'MRC_INPUTS':
            $scope.iconName = "Inputs sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Inputs";
            break;
        case 'MRC_SERVICE_DELIVERY':
            $scope.iconName = "Service Delivery sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Service Delivery";
            break;
        case 'MRC_COVERAGE':
            $scope.iconName = "Coverage sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Coverage";
            break;
        case 'MRC_OUTCOMES':
            $scope.iconName = "Outcomes sub-domain";
            $scope.phctitle = "National Integrated MOH Directorates Outcomes";
            break;
    }

	//var exploreAnalyticConfig = '&tableLayout=true&columns=dx&rows=ou&hideEmptyRows=true';
	var exploreAnalyticConfig = '&tableLayout=true&columns=dx&rows=ou';

	//Get all organisation unit levels from DHIS2
	orgUnitLevelService.getOrgUnitLevels(baseURL).get({}, function (allLevels) {
		$scope.orgLevels = allLevels.organisationUnitLevels;
		$scope.orgLevels.sort(function(a,b){
			return a.level - b.level
		});
		$scope.selectedLevel = allLevels.organisationUnitLevels[0];
		//filters only the first 3 organisation unit levels
		$scope.filterLevels = function(level){
			if (level['level'] <= 3)
				return level;
		}
	});

	/*Manages selection of different organisation unit levels and also displays charts based on level selected*/
	$scope.update = function() {
		var graphDiv = angular.element(document.querySelector('#graphx0'));
		graphDiv.empty();
		getOrgUnitsByLevelService.getLevelOrgUnits(baseURL, $scope.selectedLevel.level).then(function (orgUnitsChildren) {
			var defaultSelectedValue = {id:"2", displayName:"ALL"};
			orgUnitsChildren.data['organisationUnits'].unshift(defaultSelectedValue);
			$scope.orgUnitsChildren = orgUnitsChildren.data['organisationUnits'];
			$scope.defaultOrgUnit = $scope.orgUnitsChildren[0];
		});

		exploreService.getDashlets(baseURL).get({dashboard: $routeParams.dashboard}, function (dashlets) {
			//var link = getAnalyticLink($routeParams.dashletId, dashlets.dashlets);
			var recreateExplorer = function(link){
				var linkArray = link.split("&");
				var newLink = ''
				var isPeriodFiltered = 1;
				if ($scope.selectedLevel.level == 1){
					//newLink = linkArray[0]+"&"+linkArray[1]+"&filter=ou\\:LEVEL-"+$scope.selectedLevel.level+analyticsConfigFilterOu;
                    chartType = $routeParams.chartType.toLowerCase();
                    if (chartType != 'table'){
                        newLink = getAnalyticLink($routeParams.dashletId, dashlets.dashlets)+analyticsConfigFilterOu;
                    }
                    else{
                        newLink = getAnalyticLink($routeParams.dashletId, dashlets.dashlets)+'&tableLayout=true&columns=ou&rows=dx';
                    }
                    isPeriodFiltered = 1;
				}
				else{
                    chartType = 'bar';
                    isPeriodFiltered = 0;

                    if ($routeParams.chartType.toLowerCase() == 'table'){
                        chartType = 'table';
                        newLink = getAnalyticLink($routeParams.dashletId, dashlets.dashlets)+'&tableLayout=true&columns=ou&rows=dx';
                    }
                    else{
                        newLink = linkArray[0]+"&dimension=ou\\:LEVEL-"+$scope.selectedLevel.level+"&filter=pe\\:"+linkArray[1].split(":")[1]+analyticsConfigFilterPe;
                    }
				}
				generateAnalyticService.getData(newLink).get({}, function (data) {
					generateVisualization('graphx0', chartType.toLowerCase(), data, getAnalyticTitle($routeParams.dashletId, dashlets.dashlets), isPeriodFiltered, 'drilldown')
				});
			}
			recreateExplorer(getAnalyticLink($routeParams.dashletId, dashlets.dashlets));
		});
	}

	/*Loads default visualization as shown in the dashboard*/
	exploreService.getDashlets(baseURL).get({
		dashboard: dashboardSelected
	}, function (dashlets) {
		var link = getAnalyticLink($routeParams.dashletId, dashlets.dashlets);

		var exploreTitle = getAnalyticTitle($routeParams.dashletId, dashlets.dashlets);
		var isTable ='table';
		if (isTable == chartType.toLowerCase()){
			
			generateAnalyticService.getData(link+'&tableLayout=true&columns=ou&rows=dx').get({}, function (data) {

			var typeOfChart = chartType.toLowerCase();

			generateVisualization('graphx0', typeOfChart, data, exploreTitle, 1, 'drilldown');
			});
		}

		generateAnalyticService.getData(link+analyticsConfigFilterOu).get({}, function (data) {

			var typeOfChart = chartType.toLowerCase();

			generateVisualization('graphx0', typeOfChart, data, exploreTitle, 1, 'drilldown');
		});

		$scope.viewChart = function(levelSelected, orgUnitSelected){

			var recreateExplorer = function(link){

				var linkArray = link.split("&")
				var newLink = linkArray[0]+"&dimension=ou\\:"+orgUnitSelected+"&filter=pe\\:"+linkArray[1].split(":")[1]+exploreAnalyticConfig;

				if (orgUnitSelected == 2){
					orgUnitSelected = "LEVEL-2";

                    generateAnalyticService.getData(newLink).get({}, function (data) {
                        generateVisualization(graphx0, chartType.toLowerCase(), data, exploreTitle, levelSelected, 'drilldown')
                    });
				}
				else{
                    orgUnitService.getOrgChildren(baseURL, orgUnitSelected).get({}, function (data) {
                        var children = data.children;
                        var childrenList = [];

                        for (var i = 0; i < children.length; i++){
                            childrenList.push(children[i].id);
                        }
                        generateAnalyticService.getData(newLink).get({}, function (data) {
                            generateVisualization(graphx0, chartType.toLowerCase(), data, exploreTitle, levelSelected, 'drilldown')
                        });
                    });
                }
			}
			recreateExplorer(link);
		}
	});

	//Sorting best and worst ten districts
	exploreService.getDashlets(baseURL).get({
		dashboard: dashboardSelected
	}, function (dashlets) {

			var link = getAnalyticLink($routeParams.dashletId, dashlets.dashlets);
			var linkArray = link.split("&");
			var sortLink = '';
			var sortLink = linkArray[0]+"&dimension=ou\\:LEVEL-3&filter=pe\\:"+linkArray[1].split(":")[1];
			generateAnalyticService.getData(sortLink+analyticsConfigFilterPe).get({}, function (ascData) {

				var originalData = ascData.rows;
				var reformatedData = [];

				for (var i = 0; i < originalData.length; i++){
					var rowData = [];
					rowData.push(originalData[i][1]);
					rowData.push(Number(originalData[i][4]));
					reformatedData.push(rowData);
				}


				function comparator(a, b){
					return a[1] - b[1];
				}
				reformatedData.sort(comparator);
				$scope.worstDistricts = reformatedData.slice(0, 5);
				$scope.bestDistricts = reformatedData.slice(-5).reverse();
			})
		});
});