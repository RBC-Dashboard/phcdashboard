'use strict';

var rbcServices = angular.module('rbc.services', ['ngResource'])

rbcServices.service('dashboardService', function ($resource) {
	return {
		getDashboards: function (baseURL) {
			return $resource(baseURL + 'dataStore/rbcdashboard/:dashboard', {
				dashboard: '@dashboard'
			});
		}
	}
});

rbcServices.service('dataElementService', function ($resource) {
	return {
		getDataElements: function (baseURL) {
			return $resource(baseURL + 'dataElements.json?fields=id,displayName&paging=false', {});
		}
	}
});

rbcServices.service('indicatorService', function ($resource) {
	return {
		getIndicators: function (baseURL) {
			return $resource(baseURL + 'indicators.json?fields=id,displayName&paging=false', {});
		}
	}
});

rbcServices.service('dataElementGroupsService', function ($resource) {

		this.getDataElementGroups = function (baseURL) {
			return $resource(baseURL + 'dataElementGroups:deGrpId.json?paging=false', {});
		}
		this.getDataElementGroupElements = function(baseURL){
			return $resource(baseURL + 'dataElementGroups/:deGrpId.json?fields=dataElements[id,displayName]&paging=false', {deGrpId: "@deGrpId"});
		}
});

rbcServices.service('orgUnitLevelService', function ($resource) {

		this.getOrgUnitLevels = function (baseURL) {
			return $resource(baseURL + 'organisationUnitLevels.json?fields=level,id,displayName&paging=false', {});
		}
});

rbcServices.service('getOrgUnitsByLevelService', function ($http) {
	this.getLevelOrgUnits = function(baseURL, level){
			return $http.get(baseURL + 'organisationUnits.json?filter=level:eq:'+level+'&fields=id,displayName&paging=false');
	}
});

rbcServices.service('generateUidService', function ($resource) {
	this.generateUid = function (baseURL) {
		return $resource(baseURL + 'system/uid.json', {});
	}
});

rbcServices.service('analyticService', function ($http) {
	this.getAnalyticsData = function (baseURL, dx, pe, ou) {
		return $http.get(baseURL + 'analytics.json?dimension=dx:' + dx + '&dimension=pe:' + pe + '&dimension=ou:' + ou + ';');
	}

	this.getAnalyticsLink = function (baseURL, dx, pe, ou) {
		//alert(dx)
		var dxElement = replaceCommas(dx);
		var pePeriod = replaceCommas(pe);
		//alert(dxElement+' ***');

			//return baseURL + 'analytics.json?dimension=dx\\:' + dxElement + '&dimension=pe\\:' + pe + '&dimension=ou\\:' + ou
		return baseURL + 'analytics.json?dimension=dx\\:' + dxElement + '&dimension=pe\\:' + pePeriod + '&filter=ou\\:LEVEL-' + ou
	}
});

rbcServices.service('generateAnalyticService', function ($resource) {
	this.getData = function (link) {
		return $resource(link, {});
	}
});

rbcServices.service('generateReportTableService', function ($resource) {
	this.getData = function (link) {
		return $resource(link, {});
	}
});

rbcServices.service('orgUnitService', function ($resource) {
	//return {
		this.getOrgs = function (baseURL) {
			return $resource(baseURL + 'organisationUnits.json?fields=id,displayName&paging=false', {uid: "@uid"});
		}
	this.getOrgChildren = function(baseURL, orgUnitUid){
		return $resource(baseURL + 'organisationUnits/'+orgUnitUid+'.json?fields=children[id,displayName]');
	}
	//}
});

rbcServices.service('targetService', function ($http) {
	return {
		getTargets: function (baseURL, dx, pe, ou) {
			return $http.get(baseURL + 'analytics.json?dimension=dx:' + dx + '&dimension=pe:' + pe + '&dimension=ou:' + ou);
		}
	}
});

rbcServices.factory('orgUnitByLevelService', function ($resource) {
	return {
		getOrgs: function (baseURL, orgUnitLevel) {
			return $resource(baseURL + 'organisationUnits.json?filter=level\\:eq:orgUnitLevel&fields=id,displayName&paging=false', {
				orgUnitLevel: "@orgUnitLevel"
			});
		}
	}
});

