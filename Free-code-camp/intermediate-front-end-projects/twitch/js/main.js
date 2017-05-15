

// Get data
var twitchChannels = "https://wind-bow.glitch.me/twitch-api/channels/";
var twitchStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var channel = ["medrybw", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < channel.length; i++) {


    // Display each channel in a list
    $.ajax({
        url: twitchChannels + channel[i],
        datatype: "jsonp",
        success: function (channel) {
            console.log(channel);
            var profile = '<img class = "profile" src=" ' + channel.logo + '">';
            var pageLink = '<a href="' + channel.url + '"target="_blank">' + channel.display_name + '</a>'
            var name = channel.display_name;
            $("ul").append('<li class="profile">' + profile + pageLink + '</li>');
            console.log(name);

            // Check if online - NOT WORKING YET
            $.ajax({
                url: twitchStreams + channel[i],
                datatype: "jsonp",
                success: function (stream) {
                    var nameStatus = stream.display_name;
                    if (!channel.stream) {
                        console.log("offline");
                        console.log(stream);
                        console.log (name, nameStatus);
                        $(".status_check").append('<img class="status" src = "img/cross.png">')
                        return;
                    }

                }
            })

        }
    })



}
