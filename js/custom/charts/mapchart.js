/*Embeds DHIS2 generated GIS map into custom dashboard*/

function embedGisMap(dashletId, exploreLink, dataLink){
	$("#"+dashletId).append('<div class="dropdown" style="float: right;"><a class="dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a><ul class="dropdown-menu"><li><a href="">Explore</a></li></ul></div>');
	$("#"+dashletId).append('<img class="img-responsive" src=""/>');
	$("#"+dashletId).find("a").prop("href", exploreLink);
	$("#"+dashletId).find("img").prop("src", dataLink);
}
