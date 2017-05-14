

// Get data
var twitchChannels = "https://wind-bow.glitch.me/twitch-api/channels/";
var twitchStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var channel = ["medrybw", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < channel.length; i++) {


    // Display each channel in a list
    $.ajax({
        url: twitchChannels + channel[i],
        datatype: "jsonp",
        success: function (data) {
            console.log(data);
            var profile = '<img class = "profile" src=" ' + data.logo + '">';
            var pageLink = '<a href="' + data.url + '"target="_blank">' + data.display_name + '</a>'
            $("ul").append('<li>' + profile + pageLink + '</li>');

        }
    })


    // Check if online
    $.ajax({
        url: twitchStreams + channel[i],
        datatype: "jsonp",
        success: function (data) {
            if (!data.stream) {
                console.log("yes");
                
                return;
            }

        }
    })
}