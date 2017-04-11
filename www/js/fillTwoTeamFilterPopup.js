function fillTwoTeamTeamsFilterPopup(sportName, sportNameInitial){
	sportName = sportName.replace(/\s/g, '');
	var favTeams = localStorage.getItem("" + sportName + "FavTeams");
	
	/*		There is fav teams for this sport		*/
	if(favTeams !== null){
		var favTeamsArray = favTeams.split(',');
		favTeamsArray.sort();
		$("#twoTeamTeamsFilterList").html("");
		for(a in favTeamsArray){
			$("#twoTeamTeamsFilterList").append(
				"<li class='favTeamList' >" +
					"<div class='ui-grid-b'>" +
						"<div class='removeFavouriteFilterBlock ui-block-a'>" +
							"<a class='removeFavourite ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeFavourite(\"" + favTeamsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favTeams" + "\",\"" + "two" +"\")')></a>" +
						"</div>" +
						"<a class='favouriteFilterBlock ui-block-b' onclick='addActiveFilter(\"" + favTeamsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favTeams" + "\",\"" + "two" +"\")'>" +
							"<div class='favText favTextFilter ui-block-a'>" + favTeamsArray[a] + "</div>" +
						"</a>" +
						"<div class='favouriteFilterBlock ui-block-c'>" +
							"<a class='favTeamListFilter ui-block-b ui-btn ui-icon-search ui-btn-icon-right' onclick='addActiveFilter(\"" + favTeamsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favTeams" + "\",\"" + "two" +"\")'></a>" +
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
		}
	}
	/*		There is not any fav teams for this sport	*/
	else{
		$("#twoTeamTeamsFilterList").html("");
		$("#twoTeamTeamsFilterList").append(
			"<h3 class='noMatchesHeader'>You have no</h3>" +
			"<h3 class='noMatchesHeader'>favourite teams</h3>"
		);
	}
	$('#twoTeamTeamsFilterList li:nth-child(even)').addClass('normal');
	$('#twoTeamTeamsFilterList li:nth-child(odd)').addClass('alternate');
}

function fillTwoTeamCompsFilterPopup(sportName, sportNameInitial){
	sportName = sportName.replace(/\s/g, '');
	var favComps = localStorage.getItem("" + sportName + "FavComps");
	
	if(favComps !== null){
		var favCompsArray = favComps.split(',');
		favCompsArray.sort();
		$("#twoTeamCompsFilterList").html("");
		for(a in favCompsArray){
			$("#twoTeamCompsFilterList").append(
				"<li class='favTeamList' >" +
					"<div class='ui-grid-b'>" +
						"<div class='removeFavouriteFilterBlock ui-block-a'>" +
							"<a class='removeFavourite ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeFavourite(\"" + favCompsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favComps" + "\",\"" + "two" +"\")')></a>" +
						"</div>" +
						"<a class='favouriteFilterBlock ui-block-b' onclick='addActiveFilter(\"" + favCompsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favComps" + "\",\"" + "two" +"\")'>" +
							"<div class='favText favTextFilter ui-block-a'>" + favCompsArray[a] + "</div>" +
						"</a>" +
						"<div class='favouriteFilterBlock ui-block-c'>" +
							"<a class='favTeamListFilter ui-block-b ui-btn ui-icon-search ui-btn-icon-right' onclick='addActiveFilter(\"" + favCompsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favComps" + "\",\"" + "two" +"\")'></a>" +
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
		}
	}

	else{
		$("#twoTeamCompsFilterList").html("");
		$("#twoTeamCompsFilterList").append(
			"<h3 class='noMatchesHeader'>You have no</h3>" +
			"<h3 class='noMatchesHeader'>favourite competitions</h3>"
		);
	}
	$('#twoTeamCompsFilterList li:nth-child(even)').addClass('normal');
	$('#twoTeamCompsFilterList li:nth-child(odd)').addClass('alternate');
}