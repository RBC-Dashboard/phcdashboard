/*Replaces commas found in multiple selected data elements*/
function replaceCommas(dx){
	var dxString = dx.toString();
	var replaceWith = ";"
	dxString = dxString.replace(/,/g, replaceWith)
	return dxString;
}

function getDisplayNames(arrayOfUids, metaDataNames){
	var displayNames = []
	for(var i = 0; i < arrayOfUids.length; i++){
		displayNames.push(metaDataNames[arrayOfUids[i]]);
	}
	return displayNames;
}

function parseTableLayout(data, level){
	var dx = data.metaData.dx;
	var dataRows = data.rows;
	var pe = '';
	var ou = '';
	if (level == 1){
		var dhisPe = data.metaData.names;

		pe = data.metaData.pe;
		var tempPe = [];
		for (var i = 0; i < pe.length; i++){
			tempPe.push(dhisPe[pe[i]]);
		}
		pe = tempPe;
	}
	else{
		ou = data.metaData.ou;
		ou = getDisplayNames(ou, data.metaData.names)
	}

	var xAxis = [];
	var waarde = [];
	var columns = [];
	for (var k = 0; k < dx.length; k++){
		var namen = [];
		namen.push(data.metaData.names[dx[k]]);
		waarde.push(namen);
	}

	for (var i =0; i < dataRows.length; i++){

		for(var k = 0; k < waarde.length; k++){
			var waarder = parseInt(dataRows[i][4 + k]);
			waarde[k].push(waarder)
		}
	}
	if (level == 1)
		columns.push(xAxis.concat(pe));
	else
		columns.push(xAxis.concat(ou));
	return columns.concat(waarde);
}

function getAnalyticTitle(dashletUid, dashlets) {
	for (var dashletCount = 0; dashletCount < dashlets.length; dashletCount++) {
		var idDash = dashlets[dashletCount].id;
		if (dashletUid == dashlets[dashletCount].id) {
			return dashlets[dashletCount].title;
		}
	}
}

function getAnalyticLink(dashletUid, dashlets) {
	for (var dashletCount = 0; dashletCount < dashlets.length; dashletCount++) {
		//var idDash = dashlets[dashletCount].id;
		if (dashletUid == dashlets[dashletCount].id) {
			return baseURL+dashlets[dashletCount].link;
		}
	}
}

function highchartsSeriesData(dataRows, chartType){
	var seriesData = [];
	var roseCategories = [];

	if (chartType === 'pie'){
		var pieData = {data:[]};
		for (var i = 0; i < dataRows.length; i++){
			var seriesObj = {name:'',y:''};
			seriesObj.name = dataRows[i][0];
			seriesObj.y = dataRows[i][1];
			pieData.data.push(seriesObj);
		}
		//pieData.data = data;
		seriesData.push(pieData);
	}
	else{
		for (var i = 0; i < dataRows.length; i++){
			var seriesObj = {name:'',data:[]};
			seriesObj.name = dataRows[i][0];
			dataRows[i].splice(0,1);
			seriesObj.data = dataRows[i];
			seriesData.push(seriesObj);
		}
	}

	return seriesData;
}

function calculateAlert(alertId, alertType, performance, dataValueCurrent, dataValuePrevious, targetValue){

	if (alertType === 'yesno' && performance === '+ve'){
		if (dataValueCurrent >= targetValue){
			//then good
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/check_mark_grey.png');
		}
		else{
			//then bad
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/Exclamation_point_Red.png');
		}
	}
	if (alertType === 'yesno' && performance === '-ve'){
		if (dataValueCurrent < targetValue){
			//then good
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/check_mark_grey.png');
		}
		else{
			//then bad
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/Exclamation_point_Red.png');
		}
	}
	if (alertType === 'trend' && performance === '+ve'){
		//good
		if ((dataValueCurrent >= targetValue)&& (dataValueCurrent > dataValuePrevious) ){
			//then good trend green upwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/up_arrow_grey.png');
		}
		if ((dataValueCurrent >= targetValue)&& (dataValueCurrent < dataValuePrevious) ){
			//then good trend green downwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/down_arrow_gray.png');
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
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/up_arrow_red.png');
		}
		if ((dataValueCurrent < targetValue)&& (dataValueCurrent < dataValuePrevious) ){
			//then good trend red downwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/down_arrow_red.png');
		}
	}
	if (alertType === 'trend' && performance === '-ve'){
		if ((dataValueCurrent <= targetValue)&& (dataValueCurrent < dataValuePrevious) ){
			//then good trend green upwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/up_arrow_grey.png');
		}
		if ((dataValueCurrent <= targetValue)&& (dataValueCurrent > dataValuePrevious) ){
			//then good trend green downwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/down_arrow_gray.png');
		}
		if ((dataValueCurrent > targetValue)&& (dataValueCurrent > dataValuePrevious) ){
			//then bad trend red downwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/down_arrow_red.png');
		}
		if ((dataValueCurrent > targetValue)&& (dataValueCurrent < dataValuePrevious) ){
			//then good trend red upwards
			$("#alert-box"+alertId).find("img").prop("src", 'assets/img/icons/up_arrow_red.png');
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