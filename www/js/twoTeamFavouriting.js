/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {*/
	function toggleFavourite(home,away,comp,toChange,isMember,sportName){
		var favTeams = localStorage.getItem("" + sportName + "FavTeams");
		var favComps = localStorage.getItem("" + sportName + "FavComps");
		
		if(toChange === 'home'){
			if(favTeams === null){
				localStorage.setItem(sportName + "FavTeams", home)
			}
			else if((favTeams !== null) && (isMember === 'false')){
				var favTeamJson = favTeams.split(',');
				
				favTeams = favTeams + "," + home;
				localStorage.setItem(sportName + "FavTeams", favTeams);
			}
			else{
				var favTeamJson = favTeams.split(',');
				
				for (var i=favTeamJson.length-1; i>=0; i--) {
					if (favTeamJson[i] === home) {
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
			}
		}
		else if(toChange === 'away'){
			if(favTeams === null){
				localStorage.setItem(sportName + "FavTeams", away)
			}
			
			else if((favTeams !== null) && (isMember === 'false')){
				var favTeamJson = favTeams.split(',');
				
				favTeams = favTeams + "," + away;
				localStorage.setItem(sportName + "FavTeams", favTeams);
			}
			
			else{
				var favTeamJson = favTeams.split(',');
				
				for (var i=favTeamJson.length-1; i>=0; i--) {
					if (favTeamJson[i] === away) {
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
			}
		}
		
		else if(toChange === 'comp'){
			if(favComps === null){
				localStorage.setItem(sportName + "FavComps", comp)
			}
			
			else if((favComps !== null) && (isMember === 'false')){
				var favCompJson = favComps.split(',');
				
				favComps = favComps + "," + comp;
				localStorage.setItem(sportName + "FavComps", favComps);
			}
			
			else{
				var favCompJson = favComps.split(',');
				
				for (var i=favCompJson.length-1; i>=0; i--) {
					if (favCompJson[i] === comp) {
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
			}
		}
		fillTwoTeamFavPopup(home,away,comp,sportName);
	}

//}