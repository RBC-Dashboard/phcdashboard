/*jslint white:true */
/*global angular */
(function () {
	var rbcapp = angular.module('rbcapp', ['ngRoute','alert.controllers','national.controllers','explore.controllers'
	]);
	rbcapp.config(function ($routeProvider) {
		$routeProvider
			/* PHC routes */
			.when("/phc_system/:dashboard", {
				templateUrl: "partials/tpl1.html",
				controller : "nationalController"
			})
			.when("/phc_input/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/phc_coverage/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/phc_outcomes/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/phc_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* IHPDC HIV dashboard routes */
			.when("/ihpdc_hiv_system/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/ihpdc_hiv_input/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_hiv_coverage/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_hiv_outcomes/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_hiv_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* IHPDC Malaria routes */
			.when("/ihpdc_malaria_system/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/ihpdc_malaria_input/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_malaria_coverage/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/ihpdc_malaria_outcomes/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})
			.when("/ihpdc_malaria_service/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})

			/* IHPDC MCH – EPI routes */
			.when("/ihpdc_mchepi_system/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/ihpdc_mchepi_input/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/ihpdc_mchepi_coverage/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_mchepi_outcomes/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_mchepi_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* IHPDC TB routes */
			.when("/ihpdc_tb_system/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/ihpdc_tb_input/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/ihpdc_tb_coverage/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/ihpdc_tb_outcomes/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/ihpdc_tb_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* MPPD routes */
			.when("/mppd_system/:dashboard", {
				templateUrl: "partials/tpl1.html",
				controller : "nationalController"
			})
			.when("/mppd_input/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/mppd_coverage/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/mppd_outcomes/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/mppd_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* RHCC routes */
			.when("/rhcc_system/:dashboard", {
				templateUrl: "partials/tpl1.html",
				controller : "nationalController"
			})
			.when("/rhcc_input/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/rhcc_coverage/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/rhcc_outcomes/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/rhcc_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* MRC routes */
			.when("/mrc_system/:dashboard", {
				templateUrl: "partials/tpl1.html",
				controller : "nationalController"
			})
			.when("/mrc_input/:dashboard", {
				templateUrl: "partials/tpl2.html",
				controller : "nationalController"
			})
			.when("/mrc_coverage/:dashboard", {
				templateUrl: "partials/tpl4.html",
				controller : "nationalController"
			})
			.when("/mrc_outcomes/:dashboard", {
				templateUrl: "partials/tpl5.html",
				controller : "nationalController"
			})
			.when("/mrc_service/:dashboard", {
				templateUrl: "partials/tpl3.html",
				controller : "nationalController"
			})

			/* Explore route */
			.when("/explore/:dashboard/:chartType/:dashletId", {
				templateUrl: "partials/explore.html"
				//controller : "exploreController"
			})
			.when("/dhis2_home", {
				redirectTo: function(){
					window.location = dhisHome+"dhis-web-dashboard-integration/index.action";
				}
			})
			.when("/about", {
				templateUrl: "partials/about.html"
					//controller : "aboutController"
			})
			.otherwise({
				redirectTo: "phc_system/PHC_SYSTEM"
			});
	});
}());
