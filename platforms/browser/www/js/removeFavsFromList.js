function removeFavourite(filterText, sportName, sportNameInitial, type, teams){
	if(type === 'favTeams'){
		var favTeams = localStorage.getItem("" + sportName + "FavTeams");
		var favTeamJson = favTeams.split(',');
		
		for (var i=favTeamJson.length-1; i>=0; i--) {
			if (favTeamJson[i] === filterText) {
				favTeamJson.splice(i, 1);
				var favTeamString = favTeamJson.toString();
				if(favTeamString === ""){
					localStorage.removeItem(sportName + "FavTeams");
				}
				else{
					localStorage.setItem(sportName + "FavTeams", favTeamString);
				}
				break;
			}
		}
		if(localStorage.getItem("" + sportName + "ActiveTwoTeamFilter") === filterText){
			localStorage.removeItem(sportName + "ActiveTwoTeamFilter");
		}
		fillTwoTeamTeamsFilterPopup(sportName, sportNameInitial);
	}
	else if(type === 'favComps'){
		var favComps = localStorage.getItem("" + sportName + "FavComps");
		var favCompJson = favComps.split(',');
		
		for (var i=favCompJson.length-1; i>=0; i--) {
			if (favCompJson[i] === filterText) {
				favCompJson.splice(i, 1);
				var favCompString = favCompJson.toString();
				if(favCompString === ""){
					localStorage.removeItem(sportName + "FavComps");
				}
				else{
					localStorage.setItem(sportName + "FavComps", favCompString);
				}
				break;
			}
		}
		if(localStorage.getItem("" + sportName + "ActiveTwoCompFilter") === filterText){
			localStorage.removeItem(sportName + "ActiveTwoCompFilter");
		}
		fillTwoTeamCompsFilterPopup(sportName, sportNameInitial);
	}
	else if(type === 'favEvents'){
		var favEvents = localStorage.getItem("" + sportName + "FavEvents");
		var favEventJson = favEvents.split(',');
		
		for (var i=favEventJson.length-1; i>=0; i--) {
			if (favEventJson[i] === filterText) {
				favEventJson.splice(i, 1);
				var favEventsString = favEventJson.toString();
				if(favEventsString === ""){
					localStorage.removeItem(sportName + "FavEvents");
				}
				else{
					localStorage.setItem(sportName + "FavEvents", favEventsString);
				}
				break;
			}
		}
		if(localStorage.getItem("" + sportName + "ActiveMultiEventFilter") === filterText){
			localStorage.removeItem(sportName + "ActiveMultiEventFilter");
		}
		fillMultiTeamEventsFilterPopup(sportName, sportNameInitial);
	}
	else if(type === 'favGames'){
		var favGames = localStorage.getItem("" + sportName + "FavGames");
		var favGameJson = favGames.split(',');
		for (var i=favGameJson.length-1; i>=0; i--) {
			if (favGameJson[i] === filterText) {
				favGameJson.splice(i, 1);
				var favGamesString = favGameJson.toString();
				if(favGamesString === ""){
					localStorage.removeItem(sportName + "FavGames");
				}
				else{
					localStorage.setItem(sportName + "FavGames", favGamesString);
				}
				break;
			}
		}
		if(localStorage.getItem("" + sportName + "ActiveMultiEventFilter") === filterText){
			localStorage.removeItem(sportName + "ActiveMultiEventFilter");
		}
		fillMultiTeamGamesFilterPopup(sportName, sportNameInitial);
	}
	else{
		var favChannels = localStorage.getItem("favChannels");
		var favChannelJson = favChannels.split(',');
		for (var i=favChannelJson.length-1; i>=0; i--) {
			if (favChannelJson[i] === filterText) {
				favChannelJson.splice(i, 1);
				var favChannelsString = favChannelJson.toString();
				if(favChannelsString === ""){
					localStorage.removeItem("favChannels");
				}
				else{
					localStorage.setItem("FavChannels", favChannelsString);
				}
				break;
			}
		}
		if(teams === 'two'){
			if(localStorage.getItem("" + sportName + "ActiveTwoChannelFilter") === filterText){
				localStorage.removeItem(sportName + "ActiveTwoChannelFilter");
			}
		}
		else{
			if(localStorage.getItem("" + sportName + "ActiveMultiChannelFilter") === filterText){
				localStorage.removeItem(sportName + "ActiveMultiChannelFilter");
			}
		}
		fillChannelFilterPopup(teams, sportName, sportNameInitial);
	}
}