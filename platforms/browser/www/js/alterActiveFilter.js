function addActiveFilter(filterText, sportName, sportNameInitial, type, teams){
	if(type === 'favTeams'){
		localStorage.setItem(sportName + "ActiveTwoTeamFilter", filterText);
		getTwoTeamMatches(sportNameInitial);
	}
	else if(type === 'favComps'){
		localStorage.setItem(sportName + "ActiveTwoCompFilter", filterText);
		getTwoTeamMatches(sportNameInitial);
	}
	else if(type === 'favEvents'){
		localStorage.setItem(sportName + "ActiveMultiEventFilter", filterText);
		getMultiTeamMatches(sportNameInitial);
	}
	else if(type === 'favGames'){
		localStorage.setItem(sportName + "ActiveMultiGameFilter", filterText);
		getMultiTeamMatches(sportNameInitial);
	}
	else{
		if(teams === 'two'){
			localStorage.setItem(sportName + "ActiveTwoChannelFilter", filterText);
			getTwoTeamMatches(sportNameInitial);
		}
		else{
			localStorage.setItem(sportName + "ActiveMultiChannelFilter", filterText);
			getMultiTeamMatches(sportNameInitial);

		}
	}
}

function removeActiveFilter(sportName, sportNameInitial, type, teams){
	if(type === 'favTeams'){
		localStorage.removeItem(sportName + "ActiveTwoTeamFilter");
		getTwoTeamMatches(sportNameInitial);
	}
	else if(type === 'favComps'){
		localStorage.removeItem(sportName + "ActiveTwoCompFilter");
		getTwoTeamMatches(sportNameInitial);
	}
	else if(type === 'favEvents'){
		localStorage.removeItem(sportName + "ActiveMultiEventFilter");
		getMultiTeamMatches(sportNameInitial);
	}
	else if(type === 'favGames'){
		localStorage.removeItem(sportName + "ActiveMultiGameFilter");
		getMultiTeamMatches(sportNameInitial);
	}
	else{
		if(teams === 'two'){
			localStorage.removeItem(sportName + "ActiveTwoChannelFilter");
			getTwoTeamMatches(sportNameInitial);
		}
		else{
			localStorage.removeItem(sportName + "ActiveMultiChannelFilter");
			getMultiTeamMatches(sportNameInitial);
		}
	}
}

function removeActiveDateFilter (sportName, sportNameInitial) {
	sportNameNoSlash = sportName.replace(/_+/g, '');
	localStorage.removeItem(sportNameNoSlash + "ActiveTwoDateFilter");
	getTwoTeamMatches(sportNameInitial);
}
	
	
function removeActiveDateFilterMulti (sportName, sportNameInitial) {
	sportNameNoSlash = sportName.replace(/_+/g, '');
	localStorage.removeItem(sportNameNoSlash + "ActiveMultiDateFilter");
	getMultiTeamMatches(sportNameInitial);
}