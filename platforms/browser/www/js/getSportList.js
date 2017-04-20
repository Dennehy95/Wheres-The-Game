//getListOfSports(); //when on browser, uncomment
//function getListOfSports(networkState){
function getListOfSports(){
	var networkState = navigator.connection.type; //comment out when testing on browser as cordova nbot on pcs
	//networkState = 'moo';
	//if(networkState !== 'meow'){
	if(networkState !== 'none'){
		//var url="http://192.168.192.52:/Database/sportList.php";
		//var url="http://127.0.0.1:/Database/sportList.php";
		//var url="http://178.62.28.248:/Database/sportList.php";
		var url="http://www.dennehyobutternug.eu/sportList.php";

		$.getJSON(url,function(result){
			var twoTeamSports = ['football', 'rugby_league', 'rugby_union', 'american_football', 'basketball', 'gaa', 'cricket']
			var multiTeamSports = ['formula_one', 'tennis', 'horse_racing', 'snooker', 'darts']
			var profileName = localStorage.getItem('profileName');
			$("#sportsList").html("");
			$("#favouriteSportsList").html("");
			
			/******		When there is no profile, so no favourites		*******/
			
			if(profileName === null){
				$("#favouriteSportsList").append(
											"<a href='#optionsPanel' class='favNoProfileLink'><h3 class='favNoProfileHeader'>Create a profile to add favourites</h3></a>");
				$.each(result, function(i, field){
					var databaseSport = field.Tables_in_wheresthegamedb;
					var displaySport = databaseSport.replace(/_+/g, ' ');
					if( $.inArray(databaseSport, twoTeamSports) != -1){
						var type = 'getTwoTeamMatches'; 
					} else if ($.inArray(databaseSport, multiTeamSports) != -1){
						var type = 'getMultiTeamMatches';
					}
					$("#sportsList").append(
						"<li class='sportsList' >" +
							"<div class='ui-grid-a'>" +
								"<div class='sportsListLinkBlock ui-block-b'>" +
									"<a class='sportsListLink ui-btn ' onclick=" + type + "(\"" + databaseSport + "\")>" + displaySport +
								"</div>" +
								"<div class='sportsListArrowLinkBlock ui-block-c'>" +
									"<a class='sportsListArrowLink ui-btn ui-icon-carat-r ui-btn-icon-right' onclick=" + type + "(\"" + databaseSport + "\")>" +
								"</div>" +
							"</div>" +
						"</a></li>").children().last().trigger("create");
				});
			}
			
			/*******		When there is a profile, favourites	options available	*******/
			
			else{
				var hasFavs = localStorage.getItem('sports');
				
				/***** 			No favourites		******/
				if((hasFavs === null) || (hasFavs === '') ){
					$("#favouriteSportsList").append(
												"<h3 class='favouritesHeader'>Favourites</h3>" +
												"<li class='sportsList'>Click the star to add favourites</li>");
					$("#sportsList").append("<h3 class='moreSportsHeader'>More Sports</h3>");
					$.each(result, function(i, field){
					var databaseSport = field.Tables_in_wheresthegamedb;
					var displaySport = databaseSport.replace(/_+/g, ' ');
					if( $.inArray(databaseSport, twoTeamSports) != -1){
						var type = 'getTwoTeamMatches';
					} else if ($.inArray(databaseSport, multiTeamSports) != -1){
						var type = 'getMultiTeamMatches';
					}
					
					$("#sportsList").append("<li class='sportsList' >" +
							"<div class='ui-grid-b'>" +
								"<div class='favouriteSportBlock ui-block-a'>" +
									"<a class='favouriteSport ui-btn ui-icon-star ui-btn-icon-left' onclick=" + "addFavouriteSport" +"(\"" + databaseSport + "\")>" +										
								"</div>" +
								"<div class='sportsListLinkBlock ui-block-b'>" +
									"<a class='sportsListLink ui-btn ' onclick=" + type + "(\"" + databaseSport + "\")>" + displaySport +
								"</div>" +
								"<div class='sportsListArrowLinkBlock ui-block-c'>" +
									"<a class='sportsListArrowLink ui-btn ui-icon-carat-r ui-btn-icon-right' onclick=" + type + "(\"" + databaseSport + "\")>" +
								"</div>" +
							"</div>" +
						"</a></li>").children().last().trigger("create");
					});
				}
				
					/***** 			Has favourites		******/
				else{
					$("#favouriteSportsList").append("<h3 class='favouritesHeader'>Favourites</h3>");
					$("#sportsList").append("<h3 class='moreSportsHeader'>More Sports</h3>");
					$.each(result, function(i, field){
						var databaseSport = field.Tables_in_wheresthegamedb;
						var displaySport = databaseSport.replace(/_+/g, ' ');
						if( $.inArray(databaseSport, twoTeamSports) != -1){
							var type = 'getTwoTeamMatches';
						} else if ($.inArray(databaseSport, multiTeamSports) != -1){
							var type = 'getMultiTeamMatches';
						}
						
						var favSportsArray = hasFavs.split(',');
						
						if (favSportsArray.indexOf(databaseSport) !== -1) {
							$("#favouriteSportsList").append("<li class='sportsList' >" +
													"<div class='ui-grid-b'>" +
														"<div class='favouriteSportBlock ui-block-a'>" +
															"<a class='favouriteSport ui-btn ui-icon-minus ui-btn-icon-left' onclick=" + "removeFavouriteSport" +"(\"" + databaseSport + "\")>" +										
														"</div>" +
														"<div class='sportsListLinkBlock ui-block-b'>" +
															"<a class='sportsListLink ui-btn ' onclick=" + type + "(\"" + databaseSport + "\")>" + displaySport +
														"</div>" +
														"<div class='sportsListArrowLinkBlock ui-block-c'>" +
															"<a class='sportsListArrowLink ui-btn ui-icon-carat-r ui-btn-icon-right' onclick=" + type + "(\"" + databaseSport + "\")>" +
														"</div>" +
													"</div>" +
												"</a></li>").children().last().trigger("create");
						}
						else{
							$("#sportsList").append("<li class='sportsList' >" +
														"<div class='ui-grid-b'>" +
															"<div class='favouriteSportBlock ui-block-a'>" +
																"<a class='favouriteSport ui-btn ui-icon-star ui-btn-icon-left' onclick=" + "addFavouriteSport" +"(\"" + databaseSport + "\")>" +										
															"</div>" +
															"<div class='sportsListLinkBlock ui-block-b'>" +
																"<a class='sportsListLink ui-btn ' onclick=" + type + "(\"" + databaseSport + "\")>" + displaySport +
															"</div>" +
															"<div class='sportsListArrowLinkBlock ui-block-c'>" +
																"<a class='sportsListArrowLink ui-btn ui-icon-carat-r ui-btn-icon-right' onclick=" + type + "(\"" + databaseSport + "\")>" +
															"</div>" +
														"</div>" +
													"</a></li>").children().last().trigger("create");
						}
					});
				}
			}
			$('#sportsList li:nth-child(even)').addClass('normal');
			$('#sportsList li:nth-child(odd)').addClass('alternate');
			$('#favouriteSportsList li:nth-child(even)').addClass('normal');
			$('#favouriteSportsList li:nth-child(odd)').addClass('alternate');
		});
		$.LoadingOverlay("hide");
		$.mobile.changePage("#Page1", {transition:"pop"});
	}
	else{
		$("#sportsList").html("");
		$("#favouriteSportsList").html("");
		$("#sportsList").append(
			"<h3 class='favouritesHeader'>You must have an internet connection to retrieve sport lists</h3>"
		);
		$.LoadingOverlay("hide");
		$.mobile.changePage("#Page1", {transition:"pop"});
	}
}