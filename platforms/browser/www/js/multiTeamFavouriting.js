/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {*/
	function toggleFavouriteMulti(comp,event,game,toChange,isMember,sportName){
		var favEvents = localStorage.getItem("" + sportName + "FavEvents");
		var favGames = localStorage.getItem("" + sportName + "FavGames");
		
		if(toChange === 'comp'){
			if(favEvents === null){
				localStorage.setItem(sportName + "FavEvents", comp)
			}
			else if((favEvents !== null) && (isMember === 'false')){
				favEvents = favEvents + "," + comp;
				localStorage.setItem(sportName + "FavEvents", favEvents);
			}
			else{
				var favEventJson = favEvents.split(',');
				
				for (var i=favEventJson.length-1; i>=0; i--) {
					if (favEventJson[i] === comp) {
						favEventJson.splice(i, 1);
						var favEventstring = favEventJson.toString();
						if(favEventstring === ""){
							localStorage.removeItem(sportName + "FavEvents");
						}
						else{
							localStorage.setItem(sportName + "FavEvents", favEventstring);
						}
						break;
					}
				}
			}
		}
		else if(toChange === 'event'){
			if(favEvents === null){
				localStorage.setItem(sportName + "FavEvents", event)
			}
			
			else if((favEvents !== null) && (isMember === 'false')){
				var favEventJson = favEvents.split(',');
				
				favEvents = favEvents + "," + event;
				localStorage.setItem(sportName + "FavEvents", favEvents);
			}
			
			else{
				var favEventJson = favEvents.split(',');
				
				for (var i=favEventJson.length-1; i>=0; i--) {
					if (favEventJson[i] === event) {
						favEventJson.splice(i, 1);
						var favEventstring = favEventJson.toString();
						if(favEventstring === ""){
							localStorage.removeItem(sportName + "FavEvents");
						}
						else{
							localStorage.setItem(sportName + "FavEvents", favEventstring);
						}
						break;
					}
				}
			}
		}
		
		else if(toChange === 'game'){
			if(favGames === null){
				localStorage.setItem(sportName + "FavGames", game)
			}
			
			else if((favGames !== null) && (isMember === 'false')){
				var favGameJson = favGames.split(',');
				
				favGames = favGames + "," + game;
				localStorage.setItem(sportName + "FavGames", favGames);
			}
			
			else{
				var favGameJson = favGames.split(',');
				
				for (var i=favGameJson.length-1; i>=0; i--) {
					if (favGameJson[i] === game) {
						favGameJson.splice(i, 1);
						var favGamestring = favGameJson.toString();
						if(favGamestring === ""){
							localStorage.removeItem(sportName + "FavGames");
						}
						else{
							localStorage.setItem(sportName + "FavGames", favGamestring);
						}
						break;
					}
				}
			}
		}
		fillMultiTeamFavPopup(comp,event,game,sportName);
	}

//}