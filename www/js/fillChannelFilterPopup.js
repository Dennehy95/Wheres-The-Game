function fillChannelFilterPopup(type, sportName, sportNameInitial){
	$("#twoTeamChannelFilterList").html("");
	$("#multiTeamChannelFilterList").html("");
	
	var favChannels = localStorage.getItem("favChannels");
	if(type === 'two'){
		//$("#" + uniqueId).append(
		var channelFilterId = 'twoTeamChannelFilterList';
	}
	else{
		var channelFilterId = 'multiTeamChannelFilterList';
	}
	/*		There is fav teams for this sport		*/
	if(favChannels !== null){
		var favChannelsArray = favChannels.split(',');
		favChannelsArray.sort();
		for(a in favChannelsArray){
			$("#" + channelFilterId).append(
				"<li class='favTeamList' >" +
					"<div class='ui-grid-b'>" +
						"<div class='removeFavouriteFilterBlock ui-block-a'>" +
							"<a class='removeFavourite ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeFavourite(\"" + favChannelsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favChannels" + "\",\"" + type +"\")')></a>" +
						"</div>" +
						"<a class='favouriteFilterBlock ui-block-b' onclick='addActiveFilter(\"" + favChannelsArray[a] + "\",\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favChannels" + "\",\"" + type + "\")'>" +
							"<div class='favText favTextFilter ui-block-a'>" + favChannelsArray[a] + "</div>" +
						"</a>" +
						"<div class='favouriteFilterBlock ui-block-c'>" +
							"<a class='favTeamListFilter ui-block-b ui-btn ui-icon-search ui-btn-icon-right' onclick=''></a>" +
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
		}
	}
	/*		There is not any fav teams for this sport	*/
	else{
		$("#" + channelFilterId).append(
			"<h3 class='noMatchesHeader'>You have no</h3>" +
			"<h3 class='noMatchesHeader'>favourite channels</h3>"
		);
	}
	if(type === 'two'){
		$('#twoTeamChannelFilterList li:nth-child(even)').addClass('normal');
		$('#twoTeamChannelFilterList li:nth-child(odd)').addClass('alternate');
	}
	else{
		$('#multiTeamChannelFilterList li:nth-child(even)').addClass('normal');
		$('#multiTeamChannelFilterList li:nth-child(odd)').addClass('alternate');
	}
}