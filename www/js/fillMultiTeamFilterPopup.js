function fillMultiTeamEventsFilterPopup(sportName, sportNameInitial){
	sportName = sportName.replace(/\s/g, '');
	var favEvents = localStorage.getItem("" + sportName + "FavEvents");
	
	/*		There is fav teams for this sport		*/
	if(favEvents !== null){
		var favEventsArray = favEvents.split(',');
		favEventsArray.sort();
		$("#multiTeamEventsFilterList").html("");
		for(a in favEventsArray){
			$("#multiTeamEventsFilterList").append(
				"<li class='favTeamList' >" +
					"<div class='ui-grid-b'>" +
						"<div class='removeFavouriteFilterBlock ui-block-a'>" +
							"<a class='removeFavourite ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeFavourite(\"" + favEventsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favEvents" + "\",\"" + "multi" +"\")')></a>" +
						"</div>" +
						"<a class='favouriteFilterBlock ui-block-b' onclick='addActiveFilter(\"" + favEventsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favEvents" + "\",\"" + "multi" +"\")'>" +
							"<div class='favText favTextFilter ui-block-a'>" + favEventsArray[a] + "</div>" +
						"</a>" +
						"<div class='favouriteFilterBlock ui-block-c'>" +
							"<a class='favTeamListFilter ui-block-b ui-btn ui-icon-search ui-btn-icon-right' onclick='addActiveFilter(\"" + favEventsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favEvents" + "\",\"" + "multi" +"\")'></a>" +
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
		}
	}
	/*		There is not any fav teams for this sport	*/
	else{
		$("#multiTeamEventsFilterList").html("");
		$("#multiTeamEventsFilterList").append(
			"<h3 class='noMatchesHeader'>You have no</h3>" +
			"<h3 class='noMatchesHeader'>favourite events</h3>"
		);
	}
	$('#multiTeamEventsFilterList li:nth-child(even)').addClass('normal');
	$('#multiTeamEventsFilterList li:nth-child(odd)').addClass('alternate');
}

function fillMultiTeamGamesFilterPopup(sportName, sportNameInitial){
	sportName = sportName.replace(/\s/g, '');
	var favGames = localStorage.getItem("" + sportName + "FavGames");
	
	if(favGames !== null){
		var favGamesArray = favGames.split(',');
		favGamesArray.sort();
		$("#multiTeamLocationsFilterList").html("");
		for(a in favGamesArray){
			$("#multiTeamLocationsFilterList").append(
				"<li class='favTeamList' >" +
					"<div class='ui-grid-b'>" +
						"<div class='removeFavouriteFilterBlock ui-block-a'>" +
							"<a class='removeFavourite ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeFavourite(\"" + favGamesArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favGames" + "\",\"" + "multi" +"\")')></a>" +
						"</div>" +
						"<a class='favouriteFilterBlock ui-block-b' onclick='addActiveFilter(\"" + favGamesArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favGames" + "\",\"" + "multi" +"\")'>" +
							"<div class='favText favTextFilter ui-block-a'>" + favGamesArray[a] + "</div>" +
						"</a>" +
						"<div class='favouriteFilterBlock ui-block-c'>" +
							"<a class='favTeamListFilter ui-block-b ui-btn ui-icon-search ui-btn-icon-right' onclick='addActiveFilter(\"" + favGamesArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favGames" + "\",\"" + "multi" +"\")'></a>" +
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
		}
	}

	else{
		$("#multiTeamLocationsFilterList").html("");
		$("#multiTeamLocationsFilterList").append(
			"<h3 class='noMatchesHeader'>You have no</h3>" +
			"<h3 class='noMatchesHeader'>favourite locations</h3>"
		);
	}
	$('#multiTeamLocationsFilterList li:nth-child(even)').addClass('normal');
	$('#multiTeamLocationsFilterList li:nth-child(odd)').addClass('alternate');
}