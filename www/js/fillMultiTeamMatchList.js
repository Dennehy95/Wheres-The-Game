function fillMultiTeamMatchList(result,lockedInFirstDate,profile,sportName){
	if(profile === true){
		var profileClass = 'favouriteEvent ui-btn ui-icon-star ui-btn-icon-left';
	}
	else{
		var profileClass = 'favouriteEvent-noProfile ui-btn ui-icon-star ui-btn-icon-left';
	}
	
	var activeMultiEventFilter = localStorage.getItem(sportName + "ActiveMultiEventFilter");
	var activeMultiGameFilter = localStorage.getItem(sportName + "ActiveMultiGameFilter");
	var activeMultiChannelFilter = localStorage.getItem(sportName + "ActiveMultiChannelFilter");
	var activeMultiDateFilter = localStorage.getItem(sportName + "ActiveMultiDateFilter");
	
	if(activeMultiDateFilter !== null){
		$('#removeDateFilterIconMulti').removeClass('ui-state-disabled');
		result.data = result.data.filter(function (field) {
			return ((field.dateandtime.substr(0,field.dateandtime.indexOf(' ')) === activeMultiDateFilter));
		});
	}
	else{
		$('#removeDateFilterIconMulti').addClass('ui-state-disabled');
	}
	
	if(activeMultiEventFilter !== null){
		result.data = result.data.filter(function (field) {
			return ((field.event === activeMultiEventFilter) || (field.competition === activeMultiEventFilter));
		});
	}
	
	if(activeMultiGameFilter !== null){
		var activeMultiGameFilterAdjusted = activeMultiGameFilter.replace(/ -/g , ',');
		result.data = result.data.filter(function (field) {
			return ((field.game === activeMultiGameFilterAdjusted));
		});
	}
	
	if(activeMultiChannelFilter !== null){
		result.data = result.data.filter(function (field) {
			return ((field.channel.indexOf(activeMultiChannelFilter) !== -1));
		});
	}
	
	var counter = 0;
	var totalLen = $(result.data).length; //Get length of data so can add extras on last iteration
	
	$.each(result.data, function(i, field){
		counter = counter+1;
		var event=field.event;
		var game=field.game.replace(/,/g , ' -');
		var gameNoComma=field.game
		var dateandtime=field.dateandtime;
		var time=dateandtime.substr(dateandtime.indexOf(' ') + 1,5);
		var comp=field.competition;
		var channel=field.channel;
		var currentDateAndTime = dateandtime.substr(0,dateandtime.indexOf(' '));	
		if(lockedInFirstDate === false){
			dateChecker = dateandtime.substr(0,dateandtime.indexOf(' '));
			formatDateChecker = new Date(dateChecker);
			day = weekday[formatDateChecker.getDay()];
			month = months[formatDateChecker.getMonth()];
			date = formatDateChecker.getDate();
			suffix = nth(date);
			date = " " +date+suffix;
			lockedInFirstDate = true;
			uniqueId = "multi" + dateChecker;
			uniqueId.toString();
			$("#dailyEventHeading").append(
				"<div data-theme='b' data-role='collapsible'>" +
					"<h3><div class='ui-grid-a'>" +
					"<div class='matchDay ui-block-a'>" + day + "</div>" +
					"<div class='matchMonth ui-block-b'>" + month + date +"</div>" +
				"</div></h3>" +
				"<ul id='"+ uniqueId + "' class='matchList' data-role='listview' data-inset='false'>"
			);
		}
		if(dateChecker === currentDateAndTime){
			$("#" + uniqueId).append(
				"<li class='multiTeamMatches'>" +
					"<div class='ui-grid-b'>" +
						"<div class='favouriteEventBlock ui-block-a'>" +
							"<a href='#multiTeamFavPopup' data-rel='popup' class='" + profileClass + "' onClick='fillMultiTeamFavPopup(\"" + comp + "\",\"" + event + "\",\"" + game + "\",\"" + sportName + "\")'></a>" +										
						"</div>" +
						"<div class='eventListInfoBlock ui-block-b'>" +
							"<div class='eventListComp'>" + comp + "</div>" +
							"<div class='eventListTime'>" + time + "</div>" +
							"<div class='eventListGame'>" + event + "</div>" +
							"<div class='eventListGame'>" + game + "</div>" +
						"</div>" +
						"<div class='eventListTVIconBlock ui-block-c'>" +
							"<a href='#multiTeamChannelPopup' data-rel='popup' onClick='fillChannelFavFilterPopup(\"" + channel + "\",\"" + 'multiTeam' + "\",\"" + null + "\",\"" + null + "\",\"" + game + "\")'><img src='img/display_on_48.png'></a>" +	
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
			if(counter === totalLen){
				$("#dailyMatchHeading").append(
					"</ul>" +
					"</div>");
				$('#' + uniqueId + ' li:nth-child(even)').addClass('normal');
				$('#' + uniqueId + ' li:nth-child(odd)').addClass('alternate');
			}	
		}
		else{
			$("#dailyEventHeading").append(
				"</ul>" +
				"</div>");
			$('#' + uniqueId + ' li:nth-child(even)').addClass('normal');
			$('#' + uniqueId + ' li:nth-child(odd)').addClass('alternate');
			dateChecker = dateandtime.substr(0,dateandtime.indexOf(' '));
			formatDateChecker = new Date(dateChecker);
			day = weekday[formatDateChecker.getDay()];
			month = months[formatDateChecker.getMonth()];
			date = formatDateChecker.getDate();
			suffix = nth(date);
			date = " " +date+suffix;
			uniqueId = "multi" + dateChecker;
			uniqueId.toString();
			$("#dailyEventHeading").append(
				"<div data-role='collapsible' data-theme='b' >" +
					"<h3><div class='ui-grid-a'>" +
					"<div class='matchDay ui-block-a'>" + day + "</div>" +
					"<div class='matchMonth ui-block-b'>" + month + date +"</div>" +
				"</div></h3>" +
				"<ul id='"+ uniqueId + "' class='matchList' data-role='listview' data-inset='false'>"
			);
			$("#" + uniqueId).append(
				"<li class='multiTeamMatches'>"+ 
					"<div class='ui-grid-b'>" +
						"<div class='favouriteEventBlock ui-block-a'>" +
							"<a href='#multiTeamFavPopup' data-rel='popup' class='" + profileClass + "' onClick='fillMultiTeamFavPopup(\"" + comp + "\",\"" + event + "\",\"" + game + "\",\"" + sportName + "\")'></a>" +										
						"</div>" +
						"<div class='eventListInfoBlock ui-block-b'>" +
							"<div class='eventListComp'>" + comp + "</div>" +
							"<div class='eventListTime'>" + time + "</div>" +
							"<div class='eventListGame'>" + event + "</div>" +
							"<div class='eventListGame'>" + game + "</div>" +
						"</div>" +
						"<div class='eventListTVIconBlock ui-block-c'>" +
							"<a href='#multiTeamChannelPopup' data-rel='popup' onClick='fillChannelFavFilterPopup(\"" + channel + "\",\"" + 'multiTeam' + "\",\"" + null + "\",\"" + null + "\",\"" + game + "\")'><img src='img/display_on_48.png'></a>" +
						"</div>" +
					"</div>" +
				"</li>").children().last().trigger("create");
			if(counter === totalLen){
				$("#dailyMatchHeading").append(
					"</ul>" +
					"</div>");
				$('#' + uniqueId + ' li:nth-child(even)').addClass('normal');
				$('#' + uniqueId + ' li:nth-child(odd)').addClass('alternate');
			}	
		}
	});
	$("#dailyEventHeading").trigger("create");
	$("#multiTeamMatches").trigger("create");
}