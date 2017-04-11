var profileName = localStorage.getItem('profileName');
fillProfileTitle();

function fillProfileTitle() {
	$("#profileTitle").html("")
	if(profileName !== null) {
		$("#profileTitle").append(profileName);
	}
}

fillProfilePanel();

function fillProfilePanel() {
	$("#optionsPanel").html("")
	if (profileName === null){
		$("#optionsPanel").append(
			"<div class='ui-panel-inner' id='listings'>" +
				"<ul data-role='listview'>" +
					"<li data-icon='delete'>" +
						"<a href='#' onclick='closePanel()' data-rel='close' class='ui-btn ui-btn-icon-right ui-icon-delete'>Close</a>" +
					"</li>" +
					"<li data-role='collapsible' data-inset='false' data-iconpos='right'>" +
						"<h3>Create Profile</h3>" +
						"<h1>Enter Profile Name</h1>" +
						"<form id='createProfileForm' onsubmit='return false;'>" +
							"<input id='createProfileInput' data-mini='true' placeholder='Profile Name' pattern='[a-zA-Z]+' maxlength='8' type='text'/>" +
							"<input type='button' id='createProfileButton' onclick=" + "createProfile(document.getElementById('createProfileInput').value)" + " value='Create Profile' />" +
						"</form>" +
					"</li>" +
				"</ul>" +
				"<h3>Creating a profile allows for local storage to be used. This gives you access to favourites</h3>" +
			"</div>").children().last().trigger("create");
	}
	
	else {
		$("#optionsPanel").append(
			"<div class='ui-panel-inner' id='listings'>" +
				"<ul data-role='listview' id='listings'>" +
					"<li data-icon='delete'>" +
						"<a onclick='closePanel()' href='#' data-rel='close' class='ui-btn ui-btn-icon-right ui-icon-delete'>Close</a>" +
					"</li>" +
					"<li data-role='list-divider' role='heading' class='ui-li-divider ui-bar-inherit'>" +
						localStorage.getItem('profileName') +
					"</li>" +
					"<li data-role='collapsible' data-inset='false' data-iconpos='right'>" +
						"<h3>Delete Profile</h3>" +
						"<a onclick=" + "deleteProfile('justFavourites')" + " href='#' data-rel='close' class='ui-btn ui-icon-alert ui-btn-icon-right '>Just Favourites</a>" +
						"<a onclick=" + "deleteProfile('entireProfile')" + " href='#' data-rel='close' class='ui-btn ui-icon-alert ui-btn-icon-right '>Entire Profile</a>" +
					"</li>" +
				"</ul>" +
			"</div>").children().last().trigger("create");
	}
}

var creatingProfile = false;

//preventingDefaultSubmit(creatingProfile);

function closePanel(){
	$("#optionsPanel").panel("close");
}

function createProfile(inputName){
	if((inputName.length < 1) || (inputName.length > 8)){
		alert('invalid profile name');
	}
	else{
		localStorage.setItem('profileName', inputName); //set this to the 'this' of the input
		profileName = inputName;
		fillProfileTitle();
		fillProfilePanel();
		getListOfSports();
		closePanel();
	}
}

$("#createProfileForm").on( 'submit', function(event) {
	submitCreate();
});

function submitCreate(){
	$("#createProfileButton").trigger( "click" );
}
	
function deleteProfile(extent){
	if(extent === 'justFavourites'){
		var profileStore = localStorage.getItem('profileName');
		localStorage.clear();
		localStorage.setItem('profileName',profileStore);
		fillProfileTitle();
		fillProfilePanel();
		getListOfSports();
		closePanel();
	}
	else if(extent === 'entireProfile'){
		localStorage.clear();
		profileName = null;
		fillProfileTitle();
		fillProfilePanel();
		getListOfSports();
		closePanel();
	}
}

function safeReturnHome(){
	$.mobile.changePage("#Page1", {transition:"pop"});
	//updateSelect();
	//$.mobile.changePage("#Page1", {transition:"slide", reverse:"true"});
	window.location.reload(); 
}

