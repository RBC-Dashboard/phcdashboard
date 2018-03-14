/*
This file contains the App's global variables and should be placed before any app specific JavaScript files
for initialization of certain variables.
 */
var dhisHome = "https://hmis.moh.gov.rw/datawarehouse/"; //used for routing to DHIS2 Dashboard & drilldown
var baseURL = 'https://hmis.moh.gov.rw/datawarehouse/api/';
var analyticsConfigFilterOu = '&tableLayout=true&columns=dx&rows=pe&hideEmptyRows=true';
var analyticsConfigFilterPe = '&tableLayout=true&columns=dx&rows=ou&hideEmptyRows=true';
var tableDataElements = [];
var default_dataStore = 'rbcdashboard';
var DRILLDOWN_LEVELS = ['National','District','Province'];
var DIVISION_ALERTS = {
    'PHC_SYSTEM': 'PHC_ALERTS',
    'PHC_INPUTS': 'PHC_ALERTS',
    'PHC_SERVICE_DELIVERY': 'PHC_ALERTS',
    'PHC_COVERAGE': 'PHC_ALERTS',
    'PHC_OUTCOMES': 'PHC_ALERTS',

    'IHPDC_HIV_SYSTEM': 'IHPDC_ALERTS',
    'IHPDC_HIV_INPUTS': 'IHPDC_ALERTS',
    'IHPDC_HIV_SERVICE_DELIVERY': 'IHPDC_ALERTS',
    'IHPDC_HIV_COVERAGE': 'IHPDC_ALERTS',
    'IHPDC_HIV_OUTCOMES': 'IHPDC_ALERTS',
    'IHPDC_MALARIA_SYSTEM':'IHPDC_ALERTS',
    'IHPDC_MALRIA_INPUTS':'IHPDC_ALERTS',
    'IHPDC_MALRIA_SERVICE_DELIVERY':'IHPDC_ALERTS',
    'IHPDC_MALRIA_COVERAGE':'IHPDC_ALERTS',
    'IHPDC_MALRIA_OUTCOMES':'IHPDC_ALERTS',
    'IHPDC_MCHEPI_SYSTEM':'IHPDC_ALERTS',
    'IHPDC_MCHEPI_INPUTS':'IHPDC_ALERTS',
    'IHPDC_MCHEPI_SERVICE_DELIVERY':'IHPDC_ALERTS',
    'IHPDC_MCHEPI_COVERAGE':'IHPDC_ALERTS',
    'IHPDC_MCHEPI_OUTCOMES':'IHPDC_ALERTS',
    'IHPDC_TB_SYSTEM':'IHPDC_ALERTS',
    'IHPDC_TB_INPUTS':'IHPDC_ALERTS',
    'IHPDC_TB_SERVICE_DELIVERY':'IHPDC_ALERTS',
    'IHPDC_TB_COVERAGE':'IHPDC_ALERTS',
    'IHPDC_TB_OUTCOMES':'IHPDC_ALERTS',

    'MPPD_SYSTEM':'MPPD_ALERTS',
    'MPPD_INPUTS':'MPPD_ALERTS',
    'MPPD_SERVICE_DELIVERY':'MPPD_ALERTS',
    'MPPD_COVERAGE':'MPPD_ALERTS',
    'MPPD_OUTCOMES':'MPPD_ALERTS',

    'RHCC_SYSTEM':'RHCC_OUTCOMES',
    'RHCC_INPUTS':'RHCC_OUTCOMES',
    'RHCC_SERVICE_DELIVERY':'RHCC_OUTCOMES',
    'RHCC_COVERAGE':'RHCC_OUTCOMES',
    'RHCC_OUTCOMES':'RHCC_ALERTS',

    'MRC_SYSTEM':'MRC_ALERTS',
    'MRC_INPUTS':'MRC_ALERTS',
    'MRC_SERVICE_DELIVERY':'MRC_ALERTS',
    'MRC_COVERAGE':'MRC_ALERTS',
    'MRC_OUTCOMES':'MRC_ALERTS'
};

/**
 *
 * @param baseUrl
 * @returns key value array where key is dataelement uid and value is dataelement target value.
 */
function getTargets(baseUrl){
    var targets = {};
    $.getJSON(baseUrl+'dataStore/'+default_dataStore+'/TARGETS', function(result){
        $.each(result, function(i, field){

            for (var j = 0; j < field.length; j++){
                targets[field[j].dataElement] = field[j].value;
            }

        });
    });
    return targets;
}

var targetsList = getTargets(baseURL);