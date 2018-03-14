'use strict';

var alertServices = angular.module('alert.services',[])

/*alertSrvcs.service('exploreService', function ($resource) {
	return {
		getTarget: function (baseURL) {
			return $resource(baseURL + 'dataStore/rbcdashboard/:dashboard', {
				dashboard: '@dashboard'
			});
		}
	}
});*/
.service('alertService', function () { //alertType = yesno||trend ** dataValues is array
	this.calculateAlert = function(alertType, performance, dataValueCurrent, dataValuePrevious, targetValue){
		//var dataValueCurrent = dataValueCurrent;
		//var dataValuePrevious = dataValuePrevious;
		if (alertType === 'yesno' && performance === '+'){
			if (dataValueCurrent >= targetValue){
				//then good
				console.debug('yesno Then good +');
			}
			else{
				//then bad
				console.debug('yesno Then bad +');
			}
		}
		if (alertType === 'yesno' && performance === '-'){
			if (dataValueCurrent < targetValue){
				//then good
				console.debug('yesno Then good -');
			}
			else{
				//then bad
				console.debug('yesno Then good -');
			}
		}
		if (alertType === 'trend' && performance === '+'){
			//good
			if ((dataValueCurrent >= targetValue)&& (dataValueCurrent > dataValuePrevious) ){
				//then good trend green upwards
				console.debug('then good trend green upwards');
			}
			if ((dataValueCurrent >= targetValue)&& (dataValueCurrent < dataValuePrevious) ){
				//then good trend green downwards
				console.debug('then good trend green downwards');
			}
			/*if ((dataValueCurrent >= targetValue)&& (dataValueCurrent == dataValuePrevious) ){
				//How do we handle this????
			}
			 if ((dataValueCurrent < targetValue)&& (dataValueCurrent == dataValuePrevious) ){
			 //How do we handle this????
			 }
			*/
			if ((dataValueCurrent < targetValue)&& (dataValueCurrent > dataValuePrevious) ){
				//then bad trend red upwards
				console.debug('then bad trend red upwards');
			}
			if ((dataValueCurrent < targetValue)&& (dataValueCurrent < dataValuePrevious) ){
				//then good trend red downwards
				console.debug('then bad trend red downwards');
			}
		}
		if (alertType === 'trend' && performance === '-'){
			if ((dataValueCurrent <= targetValue)&& (dataValueCurrent < dataValuePrevious) ){
				//then good trend green upwards
				console.debug('then good trend green upwards');
			}
			if ((dataValueCurrent <= targetValue)&& (dataValueCurrent > dataValuePrevious) ){
				//then good trend green downwards
				console.debug('then good trend green downwards');
			}
			if ((dataValueCurrent > targetValue)&& (dataValueCurrent > dataValuePrevious) ){
				//then bad trend red downwards
				console.debug('then bad trend red downwards');
			}
			if ((dataValueCurrent > targetValue)&& (dataValueCurrent < dataValuePrevious) ){
				//then good trend red upwards
				console.debug('then good trend red upwards');
			}
			/*if ((dataValueCurrent <= targetValue)&& (dataValueCurrent == dataValuePrevious) ){
			 //How do we handle this????
			 }
			 if ((dataValueCurrent > targetValue)&& (dataValueCurrent == dataValuePrevious) ){
			 //How do we handle this????
			 }
			 */
		}
	}
});