/**
 * Adds explore link, scroll (vertical & horizontal) to custom pivot table
 * @param dashletId
 * @param exploreLink
 */
function exploreTableMenu(dashletId, exploreLink){
	$("#"+dashletId).addClass("scroll");
	var liElement = $("#"+dashletId).find("li");
	liElement.find('a').prop("href", exploreLink.link);
}
/**
 *
 * @param data unsanitized data retrieved from dhis2
 * @returns Sanitized data to be used by createPivot
 */
function createTabularData(data){
	var tableRows = [];
	for (var i = 0; i < data.length; i++){
		data[i].splice(0, 1);
		data[i].splice(1,2);
	}
	return data;
}
/**
 * creates pivot table on dashboard
 * @param id of the dashlet
 * @param data sanitized data created by function createTabularData
 * @param tableDataElements
 */
function createPivot(id, data, tableDataElements){
	var stockOutTarget = 20;
	var tableData = [];
	for (var i = 0; i < data.length; i++){
		var temp = [];
		var numDistrictsStockedOut = 0;
		var totalDaysStocketOut = 0;
		temp.push(data[i][0].trim());
		for (var j = 1; j < data[i].length; j++){
			if(data[i][j] < stockOutTarget){
				numDistrictsStockedOut++;
				totalDaysStocketOut = totalDaysStocketOut + Number(data[i][j]);
			}
		}
		if (totalDaysStocketOut > 60){
			temp.push('red'); //Red
		}
		else{
			temp.push('green'); //Green
		}
		temp.push(numDistrictsStockedOut);
		temp.push(totalDaysStocketOut);
		tableData.push(temp);
	}
	var bindto = "#"+id;
	var colNum = tableData[0].length;
	var DTable = '<table class="table table-bordered">';
	DTable += '<thead><tr><th bgcolor="#215968" color="white">Drugs</th><th bgcolor="#215968" color="white">Status</th><th bgcolor="#215968" color="white"># of districts</th><th bgcolor="#215968" color="white"># of days stockout</th></th></tr></thead><tbody>';
	for (var i = 0; i < tableData.length; i++){
		DTable+=('<tr>')
		for(var j = 0; j < colNum; j++){
			var colValue = tableData[i][j];
			if (colValue === undefined)
				colValue = '--';
			switch(colValue){
				case 'green':
					DTable+='<td bgcolor="#00FF00"></td>';
					break;
				case 'red':
					DTable+='<td bgcolor="#FF0000"></td>';
					break;
				default:
					DTable+='<td >'+colValue+'</td>';
			}
		}
		DTable+='</tr>';
	}
	DTable+='</tbody></table>';
	$(bindto).append(DTable);
}
/**
 * Creates pivot table for drill down explorer
 * @param id
 * @param data
 * @param tableDataElements
 */
function createDrilledPivot(id, data, tableDataElements){

	var stockOutTarget = 20;
	var bindto = "#"+id;
	var DTable = '<table class="table table-bordered">';
	for (var i = 0; i < data.length; i++){
		if (i == 0){
			DTable += '<thead><tr>';
			for (var j = 0; j < data[0].length; j++){
				DTable += '<th>'+data[0][j]+'</th>';
			}
			DTable += '</tr></thead><tbody>';
		}

		for (var j = 0; j < data[1].length; j++){
			console.debug(targetsList[tableDataElements[j]]+' KITS');
			DTable += '<tr>';
			var rowData = data[1][j];
			for (var m = 0; m < rowData.length; m++){
				var colVal = rowData[m];
				//DTable += '<td>'+rowData[m]+'</td>'
				if (m == 0){
					DTable+='<td>'+colVal+'</td>';
				}
				else{
					if (colVal === undefined)
						colVal = '--';
					else if (colVal <= targetsList[tableDataElements[j]]){
						DTable+='<td bgcolor="#FF0000">'+colVal+'</td>';
					}
					else{
						DTable+='<td bgcolor="#00FF00">'+colVal+'</td>';
					}
				}
			}
			DTable += '</tr>';
		}
	}
	DTable += '</tbody></table>'
	$(bindto).append(DTable);
}