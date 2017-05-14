
var twitchBase = "https://wind-bow.glitch.me/twitch-api/channels/";
var channel = ["medrybw", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < channel.length; i++) 

$.ajax ({
    url: twitchBase + channel[i],
    datatype: "jsonp",
    success: function(data) {
        console.log (data);
        var profile = '<img class = "profile" src=" ' + data.logo + '">';
        var pageLink = '<a href="' +data.url + '"target="_blank">' + data.display_name + '</a>'
        $("ul").append('<li>' + profile + pageLink + '</li>');
        
    }

})