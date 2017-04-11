/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {*/
	function toggleFavouriteChannel(channel,type,home,away,game,isMember,channels,activeProfile){
		if(activeProfile === 'true'){
			var favChannels = localStorage.getItem("favChannels");
			
			if(favChannels === null){
				localStorage.setItem("favChannels", channel)
			}
			else if((favChannels !== null) && (isMember === 'false')){
				favChannels = favChannels + "," + channel;
				localStorage.setItem("favChannels", favChannels);
			}
			else{
				var favChannelsJson = favChannels.split(',');
				
				for (var i=favChannelsJson.length-1; i>=0; i--) {
					if (favChannelsJson[i] === channel) {
						favChannelsJson.splice(i, 1);
						var favChannelsString = favChannelsJson.toString();
						if(favChannelsString === ""){
							localStorage.removeItem("favChannels");
						}
						else{
							localStorage.setItem("favChannels", favChannelsString);
						}
						break;
					}
				}
			}
		fillChannelFavFilterPopup(channels,type,home,away,game);
		}
	}

//}