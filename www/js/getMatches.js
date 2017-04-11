/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {*/
	var profileName = localStorage.getItem('profileName');

	/****		Get Day/Month (from w3schools)			****/
	var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
	
	/**** 		Get Date suffix (from stack overflow)		****/
	function nth(date) {
	  if(date>3 && date<21) return 'th';
	  switch (date % 10) {
			case 1:  return "st";
			case 2:  return "nd";
			case 3:  return "rd";
			default: return "th";
		}
	}
	
	function getTwoTeamMatches(sportName){
		//var url="http://127.0.0.1:/Database/twoTeamMatches.php"; //Local Lab Machine
		var url="http://www.dennehyobutternug.eu/twoTeamMatches.php"; //Virtual Server
		$.getJSON(url, {type: sportName}, function(result){
			$("#twoTeamMatches").html("");
			$("#sportName").html("");
			$("#dailyMatchHeading").html("");
			$("#matchFavouritesFilter").html("");
			$(".dateFilterHeading").html("");
			
			sportNameInitial = sportName; //this HAS underscores if applicable
			sportNameShow = sportName.replace(/_+/g, ' '); //This has a space in it
			sportName = sportName.replace(/_+/g, '');
			
			/******		When there is no matches on database		*******/
			if(result.success == false){
				$("#dailyMatchHeading").append(
					"<h3 class='noMatchesHeader'>No matches Available Right Now</h3>");
				$("#matchFilterForm").css("display", "none");
				$("#matchFavouritesFilter").css("display", "none");
			}
			/******		When there are matches		*******/
			else{
				$("#matchFilterForm").css("display", "block");
				$("#matchFavouritesFilter").css("display", "block");
				var activeDate = localStorage.getItem(sportName + "ActiveTwoDateFilter");
				if((profileName !== null) && (activeDate !== null))
				$("#dailyMatchHeading").append(
					"<h3 class='matchesHeader'>Matches on " + activeDate + "</h3>"
				);
				else{
					$("#dailyMatchHeading").append(
						"<h3 class='matchesHeader'>Matches</h3>"
					);
				}
				
				/******		When there is no profile, so no favourites		*******/
				if(profileName == null){
					$("#matchFavouritesFilter").css("display", "none");
					fillTwoTeamMatchList(result,false,false,sportName);
				}
				/*******		When there is a profile, favourites	options available	*******/
				else{
					var activeTwoTeamFilter = localStorage.getItem(sportName + "ActiveTwoTeamFilter");
					var activeTwoCompFilter = localStorage.getItem(sportName + "ActiveTwoCompFilter");
					var activeTwoChannelFilter = localStorage.getItem(sportName + "ActiveTwoChannelFilter");
					
					if((activeTwoTeamFilter === null) || (activeTwoTeamFilter === "")){
						activeTwoTeamFilter = 'No active filter';
						var removeFilterClassTeam = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left ui-state-disabled';
					}
					else{
						var removeFilterClassTeam = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left';
					}
					
					if((activeTwoCompFilter === null) || (activeTwoCompFilter === "")){
						activeTwoCompFilter = 'No active filter';
						var removeFilterClassComp = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left ui-state-disabled';
					}
					else{
						var removeFilterClassComp = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left';
					}
					
					if((activeTwoChannelFilter === null) || (activeTwoChannelFilter === "")){
						activeTwoChannelFilter = 'No active filter';
						var removeFilterClassChannel = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left ui-state-disabled';
					}
					else{
						var removeFilterClassChannel = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left';
					}
					
					$(".compfavIcon").css("display", "block");
					
					$(".dateFilterHeading").append(
						"<div class='ui-grid-b'>" +
							"<div id='datepickerInput'>" +
								"<input type='text' id='date'/>" +
							"</div>" +
							"<div class='removeFavouriteFilterBlock ui-block-a'>" +
								"<a id='removeDateFilterIcon' class='removeFavouriteDate ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeActiveDateFilter(\"" +sportName +"\",\"" + sportNameInitial + "\")'></a>" +
							"</div>" +
							"<div id='show-date' class='dateFilterHeading ui-block-b'>Filter by date</div>" +
							"<div id='show-datepicker' class='favouriteFilterBlock ui-block-c'>" +
								"<a class='dateFilter ui-btn ui-icon-calendar ui-btn-icon-right'></a>" +
							"</div>" +
						"</div>"
					);
					
					//setDatepickerOptions();
					$("#date").datepicker("destroy");
					$("#date").datepicker({
						dateFormat: 'yy-mm-dd',
						minDate: 0,
						maxDate: 28,
						onSelect: function(date) {
							sportNameNoSlash = sportName.replace(/_+/g, '');
							localStorage.setItem(sportNameNoSlash + "ActiveTwoDateFilter", date);
							getTwoTeamMatches(sportNameInitial);
						}
					});
					
					$("#show-date").click(function () {
						$("#date").datepicker("show");
					});
					
					$("#show-datepicker").click(function () {
						$("#date").datepicker("show");
					});
					
					$("#matchFavouritesFilter").append(
						"<h3 class='favouritesFilterHeader'>Favourite Filters</h3>" +
						"<div class='ui-grid-b'>" +
							"<div class='teamsFilterLinkBlock ui-block-a'>" +
								"<a class='teamsFilterLink header ui-btn' href='#favTeamsFilterPopup' data-rel='popup' onClick='fillTwoTeamTeamsFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>Teams</a>" +
								"<a class='teamsFilterLink text ui-btn' href='#favTeamsFilterPopup' data-rel='popup' onClick='fillTwoTeamTeamsFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>" + activeTwoTeamFilter + "</a>" +
								"<a class=\"" + removeFilterClassTeam + "\" onClick='removeActiveFilter(\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favTeams" + "\",\"" + "two" +"\")'></a>" +
							"</div>" +
							"<div class='compsFilterLinkBlock ui-block-b'>" +
								"<a class='compsFilterLink header ui-btn' href='#favCompFilterPopup' data-rel='popup' onClick='fillTwoTeamCompsFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>Competitions</a>" +
								"<a class='compsFilterLink text ui-btn' href='#favCompFilterPopup' data-rel='popup' onClick='fillTwoTeamCompsFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>" + activeTwoCompFilter + "</a>" +
								"<a class=\"" + removeFilterClassComp + "\" onClick='removeActiveFilter(\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favComps" + "\",\"" + "two" +"\")'></a>" +
							"</div>" +
							"<div class='channelsFilterLinkBlock ui-block-c'>" +
								"<a class='channelsFilterLink header ui-btn' href='#favTwoChannelFilterPopup' data-rel='popup' onclick='fillChannelFilterPopup(\"" + "two" +"\",\"" + sportName + "\",\"" + sportNameInitial + "\")'>Channels</a>" +
								"<a class='channelsFilterLink text ui-btn' href='#favTwoChannelFilterPopup' data-rel='popup' onclick='fillChannelFilterPopup(\"" + "two" +"\",\"" + sportName + "\",\"" + sportNameInitial + "\")'>" + activeTwoChannelFilter + "</a>" +
								"<a class=\"" + removeFilterClassChannel + "\" onClick='removeActiveFilter(\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favChannels" + "\",\"" + "two" +"\")'></a>" +
							"</div>" +
						"</div>"
					);
					fillTwoTeamMatchList(result,false,true,sportName,sportNameInitial);
				}
			}
		$("#sportName").append(sportNameShow);
		$.mobile.changePage("#page2", {transition:"slide"});
		});
	}

	function getMultiTeamMatches(sportName){
		//var url="http://127.0.0.1:/Database/twoTeamMatches.php";
		var url="http://www.dennehyobutternug.eu/twoTeamMatches.php";
		$.getJSON(url, {type: sportName}, function(result){
			$("#multiTeamMatches").html("");
			$("#sportNameMulti").html("");
			$("#dailyEventHeading").html("");
			$("#eventFavouritesFilter").html("");
			$(".dateFilterHeadingMulti").html("");
			sportNameInitial = sportName;
			sportNameShow = sportName.replace(/_+/g, ' ');
			sportName = sportName.replace(/_+/g, '');
			
			/******		When there is no matches on database		*******/
			if(result.success == false){
				$("#dailyEventHeading").append(
					"<h3 class='noMatchesHeader'>No Events Available Right Now</h3>"
				);
				$("#matchFilterFormMulti").css("display", "none");
				$("#eventFavouritesFilter").css("display", "none");
			}
			/******		When there are matches		*******/
			else{
				$("#matchFilterFormMulti").css("display", "block");
				$("#eventFavouritesFilter").css("display", "block");
				var activeDate = localStorage.getItem(sportName + "ActiveMultiDateFilter");
				if((profileName !== null) && (activeDate !== null)){
					$("#dailyEventHeading").append(
						"<h3 class='matchesHeader'>Events on " + activeDate + "</h3>"
					);
				}
				else{
					$("#dailyEventHeading").append(
						"<h3 class='matchesHeader'>Events</h3>"
					);
				}
				
				/******		When there is no profile, so no favourites		*******/
				if(profileName == null){
					$("#eventFavouritesFilter").css("display", "none");
					fillMultiTeamMatchList(result,false,false,sportName);
				}
				
				/*******		When there is a profile, favourites	options available	*******/
				else{
					var activeMultiEventFilter = localStorage.getItem(sportName + "ActiveMultiEventFilter");
					var activeMultiGameFilter = localStorage.getItem(sportName + "ActiveMultiGameFilter");
					var activeMultiChannelFilter = localStorage.getItem(sportName + "ActiveMultiChannelFilter");
					
					if((activeMultiEventFilter === null) || (activeMultiEventFilter === "")){
						activeMultiEventFilter = 'No active filter';
						var removeFilterClassEvent = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left ui-state-disabled';
					}
					else{
						var removeFilterClassEvent = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left';
					}
					
					if((activeMultiGameFilter === null) || (activeMultiGameFilter === "")){
						activeMultiGameFilter = 'No active filter';
						var removeFilterClassGame = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left ui-state-disabled';
					}
					else{
						var removeFilterClassGame = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left';
					}
					
					if((activeMultiChannelFilter === null) || (activeMultiChannelFilter === "")){
						activeMultiChannelFilter = 'No active filter';
						var removeFilterClassChannel = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left ui-state-disabled';
					}
					else{
						var removeFilterClassChannel = 'removeFavouriteOutside ui-btn ui-icon-delete ui-btn-icon-left';
					}
					
					$(".dateFilterHeadingMulti").append(
						"<div class='ui-grid-b'>" +
							"<div id='datepickerInputMulti'>" +
								"<input type='text' id='dateMulti'/>" +
							"</div>" +
							"<div class='removeFavouriteFilterBlock ui-block-a'>" +
								"<a id='removeDateFilterIconMulti' class='removeFavouriteDate ui-btn ui-icon-delete ui-btn-icon-left ui-block-a' onclick='removeActiveDateFilterMulti(\"" +sportName +"\",\"" + sportNameInitial + "\")'></a>" +
							"</div>" +
							"<div id='show-dateMulti' class='dateFilterHeading ui-block-b'>Filter by date</div>" +
							"<div id='show-datepickerMulti' class='favouriteFilterBlock ui-block-c'>" +
								"<a class='dateFilter ui-btn ui-icon-calendar ui-btn-icon-right'></a>" +
							"</div>" +
						"</div>"
					);
					
					$("#dateMulti").datepicker("destroy");
					$("#dateMulti").datepicker({
						dateFormat: 'yy-mm-dd',
						minDate: 0,
						maxDate: 28,
						onSelect: function(date) {
							sportNameNoSlash = sportName.replace(/_+/g, '');
							localStorage.setItem(sportNameNoSlash + "ActiveMultiDateFilter", date);
							getMultiTeamMatches(sportNameInitial);
						}
					});
					
					$("#show-dateMulti").click(function () {
						$("#dateMulti").datepicker("show");
					});
					
					$("#show-datepickerMulti").click(function () {
						$("#dateMulti").datepicker("show");
					});
					
					$("#eventFavouritesFilter").append(
						"<h3 class='favouritesFilterHeader'>Favourite Filters</h3>" +
						"<div class='ui-grid-b'>" +
							"<div class='eventsFilterLinkBlock ui-block-a'>" +
								"<a class='teamsFilterLink header ui-btn' href='#favEventsFilterPopup' data-rel='popup' onClick='fillMultiTeamEventsFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>Events</a>" +
								"<a class='teamsFilterLink text ui-btn' href='#favEventsFilterPopup' data-rel='popup' onClick='fillMultiTeamEventsFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>" + activeMultiEventFilter + "</a>" +
								"<a class=\"" + removeFilterClassEvent + "\" onClick='removeActiveFilter(\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favEvents" + "\",\"" + "multi" +"\")'></a>" +
							"</div>" +
							"<div class='compsFilterLinkBlock ui-block-b'>" +
								"<a class='teamsFilterLink header ui-btn' href='#favLocationsFilterPopup' data-rel='popup' onClick='fillMultiTeamGamesFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>Locations</a>" +
								"<a class='teamsFilterLink text ui-btn' href='#favLocationsFilterPopup' data-rel='popup' onClick='fillMultiTeamGamesFilterPopup(\"" + sportName + "\",\"" + sportNameInitial + "\")'>" + activeMultiGameFilter + "</a>" +
								"<a class=\"" + removeFilterClassGame + "\" onClick='removeActiveFilter(\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favGames" + "\",\"" + "multi" +"\")'></a>" +
							"</div>" +
							"<div class='channelsFilterLinkBlock ui-block-c'>" +
								"<a class='channelsFilterLink header ui-btn' href='#favMultiChannelFilterPopup' data-rel='popup' onclick='fillChannelFilterPopup(\"" + "multi" +"\",\"" + sportName + "\",\"" + sportNameInitial + "\")'>Channels</a>" +
								"<a class='channelsFilterLink text ui-btn' href='#favMultiChannelFilterPopup' data-rel='popup' onclick='fillChannelFilterPopup(\"" + "multi" +"\",\"" + sportName + "\",\"" + sportNameInitial + "\")'>" + activeMultiChannelFilter + "</a>" +
								"<a class=\"" + removeFilterClassChannel + "\" onClick='removeActiveFilter(\"" + sportName + "\",\"" + sportNameInitial + "\",\"" + "favChannels" + "\",\"" + "multi" +"\")'></a>" +
							"</div>" +
						"</div>"
					);
					fillMultiTeamMatchList(result,false,true,sportName);
				}
			}
			$("#sportNameMulti").append(sportNameShow);
		});
		$.mobile.changePage("#page3", {transition:"slide"});
	}
//}