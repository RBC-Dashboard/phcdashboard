/**
 * Created by mmwebaze on 1/7/2017.
 */
'use strict';

angular.module('national.controllers', ['rbc.services'])

.controller('nationalController', function ($scope, $routeParams, dashboardService, generateAnalyticService) {
    //var dashboardName = 'PHC_SYSTEM';
    $scope.phctitle = "";
    $scope.iconName = "";
    var dashboardName = $routeParams.dashboard;
    $scope.alert = dashboardName;

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
            $scope.phctitle = "National IHPDC MALARIA Inputs";
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


    dashboardService.getDashboards(baseURL).get({
        dashboard: dashboardName
    }, function (dashboardDashlets) {
        //
        var numberDashlets = dashboardDashlets.dashlets.length;
        //var rows = dashboardRows(numberDashlets);
        var dashletCount = 0;
        var dashlets = dashboardDashlets.dashlets;

        for (var d = 0; d < numberDashlets; d++) {
            dashletCount = dashletCount + 1;
            var analyticLink = baseURL+dashlets[d].link;//+analyticsConfigFilterOu;
            var chartTitle = dashlets[d].title;
            var typeOfChart = dashlets[d].chartType;
            var dashletUid = dashlets[d].id;
            var exploreLink = '';
            var dataLink = '';
            var nationalLevel = 1;
            if (typeOfChart.toLowerCase() == 'table'){
                var chartT = typeOfChart.toLowerCase();
                console.debug(analyticLink+' MITCH')

                var generateAnalytics = function (link, title, chartType, d, dashboardName, dashletUid, dataLink, exploreLink) {
                    var mData = generateAnalyticService.getData(link).get({}, function (data) {

                        generateVisualization(dashletUid,chartT, data, chartTitle, nationalLevel, dashboardName, '', '');
                    });
                }

                generateAnalytics(analyticLink+'&tableLayout=true&columns=ou&rows=dx', chartTitle, chartT, d, dashboardName, dashletUid, '', '');
            }
            else{
                if (typeOfChart.toLowerCase() == 'map'){
                    exploreLink = dhisHome+dashlets[d].exploreLink;
                    dataLink = baseURL+dashlets[d].link;
                }
                else{
                    analyticLink = analyticLink+analyticsConfigFilterOu;
                }

                var generateAnalytics = function (link, title, chartType, d, dashboardName, dashletUid, dataLink, exploreLink) {
                   // var nationalLevel = 1;
                    var mData = generateAnalyticService.getData(link).get({}, function (data) {

                        generateVisualization(dashletUid,chartType.toLowerCase(), data, title, nationalLevel, dashboardName, dataLink, exploreLink);
                    });
                }
                generateAnalytics(analyticLink, chartTitle, typeOfChart, d, dashboardName, dashletUid, dataLink, exploreLink);
            }
        }
    });
})
