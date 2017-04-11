/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {*/
	function addFavouriteSport(sportName){
		var favSports = localStorage.getItem("sports")
		if(favSports === null){
			localStorage.setItem('sports', sportName)
		}
		else{
			var favSportsJson = favSports.split(',');
			if (favSportsJson.indexOf(sportName) === -1) {
				favSports = favSports + "," +sportName;
				localStorage.setItem('sports', favSports);
			}
			var favSportsJson = favSports.split(',');
		}
		getListOfSports();
	}
	
	function removeFavouriteSport(sportName){
		var favSports = localStorage.getItem("sports")
		var favSportsJson = favSports.split(',');
		
		for (var i=favSportsJson.length-1; i>=0; i--) {
			if (favSportsJson[i] === sportName) {
				favSportsJson.splice(i, 1);
				var favSportsString = favSportsJson.toString();
				localStorage.setItem('sports', favSportsString);
				break;
			}
		}
		getListOfSports();
	}

//}