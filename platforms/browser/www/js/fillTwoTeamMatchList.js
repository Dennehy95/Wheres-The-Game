function fillTwoTeamMatchList(result,lockedInFirstDate,profile,sportName,sportNameInitial){
	if(profile === true){
		var profileClass = 'favouriteMatch ui-btn ui-icon-star ui-btn-icon-left';
	}
	else{
		var profileClass = 'favouriteMatch-noProfile ui-btn ui-icon-star ui-btn-icon-left';
	}
	
	var activeTwoTeamFilter = localStorage.getItem(sportName + "ActiveTwoTeamFilter");
	var activeTwoCompFilter = localStorage.getItem(sportName + "ActiveTwoCompFilter");
	var activeTwoChannelFilter = localStorage.getItem(sportName + "ActiveTwoChannelFilter");
	var activeTwoDateFilter = localStorage.getItem(sportName + "ActiveTwoDateFilter");
	
	if(activeTwoDateFilter !== null){
		$('#removeDateFilterIcon').removeClass('ui-state-disabled');
		result.data = result.data.filter(function (field) {
			return ((field.dateandtime.substr(0,field.dateandtime.indexOf(' ')) === activeTwoDateFilter));
		});
	}
	else{
		$('#removeDateFilterIcon').addClass('ui-state-disabled');
	}
	
	if(activeTwoTeamFilter !== null){
		result.data = result.data.filter(function (field) {
			return ((field.home === activeTwoTeamFilter) || (field.away === activeTwoTeamFilter));
		});
	}
	
	if(activeTwoCompFilter !== null){
		result.data = result.data.filter(function (field) {
			return ((field.competition === activeTwoCompFilter));
		});
	}

	if(activeTwoChannelFilter !== null){
		result.data = result.data.filter(function (field) {
			return ((field.channel.indexOf(activeTwoChannelFilter) !== -1));
		});
	}
	
	var counter = 0;
	var totalLen = $(result.data).length; //Get length of data so can add extras on last iteration
	
	$.each(result.data, function(i, field){
		counter = counter+1;
		var home=field.home;
		var away=field.away;
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
			uniqueId = "two" + dateChecker;
			uniqueId.toString();
			$("#dailyMatchHeading").append(
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
				"<li class='twoTeamMatches'>" +
					"<div class='ui-grid-b'>" +
						"<div class='favouriteMatchBlock ui-block-a'>" +
							"<a href='#twoTeamFavPopup' data-rel='popup' class='" + profileClass + "' onClick='fillTwoTeamFavPopup(\"" + home + "\",\"" + away + "\",\"" + comp + "\",\"" + sportName + "\")'></a>" +										
						"</div>" +
						"<div class='matchListInfoBlock ui-block-b'>" +
							"<div class='matchListComp'>" + comp + "</div>" +
							"<div class='matchListTime'>" + time + "</div>" +
							"<div class='matchListGame'>" + home + "</div>" +
							"<div class='matchListGame'>" + "vs" + "</div>" +
							"<div class='matchListGame'>" + away + "</div>" +
						"</div>" +
						"<div class='matchListTVIconBlock ui-block-c'>" +
							"<a href='#twoTeamChannelPopup' data-rel='popup' onClick='fillChannelFavFilterPopup(\"" + channel + "\",\"" + 'twoTeam' + "\",\"" + home + "\",\"" + away + "\",\"" + null + "\")'><img src='img/display_on_48.png'></a>" +
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
			$("#dailyMatchHeading").append(
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
			uniqueId = "two" + dateChecker;
			uniqueId.toString();
			$("#dailyMatchHeading").append(
				"<div data-role='collapsible' data-theme='b' >" +
					"<h3><div class='ui-grid-a'>" +
					"<div class='matchDay ui-block-a'>" + day + "</div>" +
					"<div class='matchMonth ui-block-b'>" + month + date +"</div>" +
				"</div></h3>" +
				"<ul id='"+ uniqueId + "' class='matchList' data-role='listview' data-inset='false'>"
			);
			$("#" + uniqueId).append(
				"<li class='twoTeamMatches'>" +
					"<div class='ui-grid-b'>" +
						"<div class='favouriteMatchBlock ui-block-a'>" +
							"<a href='#twoTeamFavPopup' data-rel='popup' class='" + profileClass + "' onClick='fillTwoTeamFavPopup(\"" + home + "\",\"" + away + "\",\"" + comp + "\",\"" + sportName + "\")'></a>" +									
						"</div>" +
						"<div class='matchListInfoBlock ui-block-b'>" +
							"<div class='matchListComp'>" + comp + "</div>" +
							"<div class='matchListTime'>" + time + "</div>" +
							"<div class='matchListGame'>" + home + "</div>" +
							"<div class='matchListGame'>" + "vs" + "</div>" +
							"<div class='matchListGame'>" + away + "</div>" +
						"</div>" +
						"<div class='matchListTVIconBlock ui-block-c'>" +
							"<a href='#twoTeamChannelPopup' data-rel='popup' onClick='fillChannelFavFilterPopup(\"" + channel + "\",\"" + 'twoTeam' + "\",\"" + home + "\",\"" + away + "\",\"" + null + "\")'><img src='img/display_on_48.png'></a>" +
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
	$("#dailyMatchHeading").trigger("create");
	$("#twoTeamMatches").trigger("create");
}