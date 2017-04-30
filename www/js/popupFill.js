function fillTwoTeamFavPopup(home,away,comp,sportName){
	sportName = sportName.replace(/\s/g, '');
	var favTeams = localStorage.getItem("" + sportName + "FavTeams");
	var favComps = localStorage.getItem("" + sportName + "FavComps");
	var changeHome = 'home';
	var changeAway = 'away';
	var changeComp = 'comp';
	/*		There is fav teams for this sport		*/
	if(favTeams !== null){
		var favTeamJson = favTeams.split(',');
		if (favTeamJson.indexOf(home) !== -1) {
			var homeIsMember = true;
			var homeFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var homeClass = 'sportsList alternate homeFav isFavourite ui-grid-a';
		}
		else{
			var homeIsMember = false;
			var homeFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var homeClass = 'sportsList alternate homeFav ui-grid-a';
		}
		if(favTeamJson.indexOf(away) !== -1){
			var awayIsMember = true;
			var awayFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var awayClass = 'sportsList normal awayFav isFavourite ui-grid-a';
		}
		else{
			var awayIsMember = false;
			var awayFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var awayClass = 'sportsList normal awayFav ui-grid-a';
		}
	}
	/*		There is not any fav teams for this sport	*/
	else{
		var homeFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var awayFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var homeIsMember = false;
		var awayIsMember = false;
		var homeClass = 'sportsList alternate homeFav ui-grid-a';
		var awayClass = 'sportsList normal awayFav ui-grid-a';
	}
	if(favComps !== null){
		var favCompsJson = favComps.split(',');
		if (favCompsJson.indexOf(comp) !== -1) {
			compIsMember = true;
			var compFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var compClass = 'sportsList alternate compFav isFavourite ui-grid-a';
		}
		else{
			var compIsMember = false;
			var compFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var compClass = 'sportsList alternate compFav ui-grid-a';
		}
	}
	/*		There is not any fav comps for this sport	*/
	else{
		var compFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var compIsMember = false;
		var compClass = 'sportsList alternate compFav ui-grid-a';
	}
	
	$("#twoTeamFavPopup").html("");
	$("#twoTeamFavPopup").append(
		"<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a>" +
		"<h3 class='favouritesHeader'>Teams</h3>" +
		"<a class='" + homeClass + "' onClick='toggleFavourite(\"" + home + "\",\"" + away + "\",\"" + comp + "\",\"" + changeHome + "\",\"" + homeIsMember + "\",\"" + sportName + "\")'>" +
			"<div class='favText ui-block-a'>" + home + "</div>" +
			"<div class='teamFavIcon ui-block-b'>" +
				"<div class='"+ homeFavIcon +"'></div>" +
			"</div>" +
		"</a>" +
		"<a class='" + awayClass + "' onClick='toggleFavourite(\"" + home + "\",\"" + away + "\",\"" + comp + "\",\"" + changeAway + "\",\"" + awayIsMember + "\",\"" + sportName + "\")'>" +
			"<div class='favText ui-block-a'>" + away + "</div>" +
			"<div class='teamFavIcon ui-block-b'>" +
				"<div class='" + awayFavIcon + "'></div>" +
			"</div>" +
		"</a>" +
		"<h3 class='favouritesHeader'>Competition</h3>" +
		"<a class='" + compClass + "' onClick='toggleFavourite(\"" + home + "\",\"" + away + "\",\"" + comp + "\",\"" + changeComp + "\",\"" + compIsMember + "\",\"" + sportName + "\")'>" +
			"<div class='favText ui-block-a'>" + comp + "</div>" +
			"<div class='compFavIcon ui-block-b'>" +
				"<div class='" + compFavIcon + "'></div>" +
			"</div>" +
		"</a>"
	);
}
	
function fillMultiTeamFavPopup(comp,event,game,sportName){
	sportName = sportName.replace(/\s/g, '');
	var favEvents = localStorage.getItem("" + sportName + "FavEvents");
	var favGames = localStorage.getItem("" + sportName + "FavGames");
	var changeComp = 'comp';
	var changeEvent = 'event';
	var changeGame = 'game';
	/*		There is fav events for this sport		*/
	if(favEvents !== null){
		var favEventsJson = favEvents.split(',');
		if (favEventsJson.indexOf(comp) !== -1) {
			var compIsMember = true;
			var compFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var compClass = 'sportsList alternate homeFav isFavourite ui-grid-a';
		}
		else{
			var compIsMember = false;
			var compFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var compClass = 'sportsList alternate homeFav ui-grid-a';
		}
		if(favEventsJson.indexOf(event) !== -1){
			var eventIsMember = true;
			var eventFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var eventClass = 'sportsList normal awayFav isFavourite ui-grid-a';
		}
		else{
			var eventIsMember = false;
			var eventFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var eventClass = 'sportsList normal awayFav ui-grid-a';
		}
	}
	/*		There is not any fav comps for this sport	*/
	else{
		var compFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var eventFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var compIsMember = false;
		var eventIsMember = false;
		var compClass = 'sportsList alternate homeFav ui-grid-a';
		var eventClass = 'sportsList normal awayFav ui-grid-a';
	}
	if(favGames !== null){
		var favGamesJson = favGames.split(',');
		if (favGamesJson.indexOf(game) !== -1) {
			gameIsMember = true;
			var gameFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var gameClass = 'sportsList alternate compFav isFavourite ui-grid-a';
		}
		else{
			var gameIsMember = false;
			var gameFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var gameClass = 'sportsList alternate compFav ui-grid-a';
		}
	}
	/*		There is not any fav teams for this sport	*/
	else{
		var gameFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var gameIsMember = false;
		var gameClass = 'sportsList alternate compFav ui-grid-a';
	}
	
	$("#multiTeamFavPopup").html("");
	$("#multiTeamFavPopup").append(
		"<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a>" +
		"<h3 class='favouritesHeader'>Event</h3>" +
		"<a class='" + compClass + "' onClick='toggleFavouriteMulti(\"" + comp + "\",\"" + event + "\",\"" + game + "\",\"" + changeComp + "\",\"" + compIsMember + "\",\"" + sportName + "\")'>" +
			"<div class='favText ui-block-a'>" + comp + "</div>" +
			"<div class='teamFavIcon ui-block-b'>" +
				"<div class='"+ compFavIcon +"'></div>" +
			"</div>" +
		"</a>" +
		"<a class='" + eventClass + "' onClick='toggleFavouriteMulti(\"" + comp + "\",\"" + event + "\",\"" + game + "\",\"" + changeEvent + "\",\"" + eventIsMember + "\",\"" + sportName + "\")'>" +
			"<div class='favText ui-block-a'>" + event + "</div>" +
			"<div class='teamFavIcon ui-block-b'>" +
				"<div class='"+ eventFavIcon +"'></div>" +
			"</div>" +
		"</a>" +
		"<h3 class='favouritesHeader'>Location</h3>" +
		"<a class='" + gameClass + "' onClick='toggleFavouriteMulti(\"" + comp + "\",\"" + event + "\",\"" + game + "\",\"" + changeGame + "\",\"" + gameIsMember + "\",\"" + sportName + "\")''>" +
			"<div class='favText ui-block-a'>" + game + "</div>" +
			"<div class='compFavIcon ui-block-b'>" +
				"<div class='"+ gameFavIcon +"'></div>" +
			"</div>" +
		"</a>"
	);
}

function fillChannelFavFilterPopup(channels,type,home,away,game){
	$("#twoTeamChannelList").html("");
	$("#multiTeamChannelList").html("");
	var profileName = localStorage.getItem('profileName');
	if(profileName === null){
		var profileClass = ' noProfile';
		activeProfile = false;
	}
	else{
		var profileClass = '';
		activeProfile = true;
	}
	
	var channelsArray = channels.split(', ');
	var favChannels = localStorage.getItem("favChannels");
	if(type === 'twoTeam'){
		var popupId = 'twoTeamChannelList';
		$("#" + popupId).append(
			"<h3 class='favouritesHeader-channels'>" + home + " vs " + away + "</h3>"
		);
	}
	else{
		var popupId = 'multiTeamChannelList';
		$("#" + popupId).append(
			"<h3 class='favouritesHeader-channels'>" + game + "</h3>"
		);
	}
	for (a in channelsArray ){
	/*		There is fav channels 		*/
	if(favChannels !== null){
		var favChannelsJson = favChannels.split(',');
		if (favChannelsJson.indexOf(channelsArray[a]) !== -1) {
			var channelIsMember = true;
			var channelFavIcon = 'teamFavIcon ui-btn ui-icon-minus ui-btn-icon-right';
			var channelClass = 'sportsList channelFav isFavourite ui-grid-a';
		}
		else{
			var channelIsMember = false;
			var channelFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
			var channelClass = 'sportsList channelFav ui-grid-a';
		}
	}
	/*		There is not any fav teams for this sport	*/
	else{
		var channelFavIcon = 'teamFavIcon ui-btn ui-icon-star ui-btn-icon-right';
		var channelIsMember = false;
		var channelClass = 'sportsList channelFav ui-grid-a';
	}
	var channelFavClass = 'channelFavIcon ui-block-b' + profileClass;
	$("#" + popupId).append(
		"<li class='channelList'>" +
			"<a class='" + channelClass +"' onclick='toggleFavouriteChannel(\"" + channelsArray[a] + "\",\"" + type + "\",\"" + home + "\",\"" + away + "\",\"" + game + "\",\"" + channelIsMember + "\",\"" + channels + "\",\"" + activeProfile + "\")'>" +
				"<div class='favText ui-block-a'>" + channelsArray[a] + "</div>" +
				"<div class='" + channelFavClass +"'>" +
					"<div class='"+ channelFavIcon +"'></div>" +
				"</div>" +
			"</a>" +
		"</li>").children().last().trigger("create");
	}
	$('#' + popupId + ' li:nth-child(even)').addClass('normal');
	$('#' + popupId + ' li:nth-child(odd)').addClass('alternate');
}