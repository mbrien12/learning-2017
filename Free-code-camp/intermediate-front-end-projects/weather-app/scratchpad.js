        $(".metric").on('click',function () {
            $(".temp").text(data.currently.temperature);
            $(".metric").text(" F"); // Need to revert back to original state...!!?

            https://api.darksky.net/forecast/ace5824d768c604c262956cc4d59425d/51.520648,-0.066424

            //Get location 

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);


// API variables
var baseURL = 'https://api.darksky.net/forecast/';
var key = 'ace5824d768c604c262956cc4d59425d/';
var lat = position.coords.latitude;
var long = position.coords.longitude;

var fullURL = baseURL + key + lat + long;

});


//basic geolocation

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

// other geolocation attempt - doesn't work but should have error messages in it like this to account for all situations

function geoLocation() {
    if (!navigator.geolocation) {
        alert("Sorry, geolocation is not supported in your browser");
        return;
    }

function success(position) {
    var latitute = position.coords.latitute;
    var longitude = position.coords.longitude;

    console.log(latitude, longitude);
}

function error() {
    alert("Unable to retrieve location");
}

navigator.geolocation.getCurrentPosition(success, error);

}

// Google maps geo-reverse API

https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyB3mYEF889VBLg_-ATuGqi8Vs9Ri9iSowo


// static weather api
    url: "https://api.darksky.net/forecast/ace5824d768c604c262956cc4d59425d/51.520648,-0.066424",

    // changing images

    // UPDATING BACKGROUND IMAGE

            var cold = 'https://unsplash.com/photos/NKSGuJzExIo';
            var average = 'https://unsplash.com/photos/Kc7xqFTtcc4';
            var hot = 'https://unsplash.it/1920/1080?image=871';

            if (celsiusRound < 20) {
                $('body').css('background', 'url(' + cold + ')');
            } else if (celsiusRound < 30) {
                $('body').css('background', 'url(' + average + ')');
            } else {
                $('body').css('background', 'url(' + hot + ')');
            }


     $(".temp").append('<span>' +celsiusRound + '<span class="metric">&#8451;</span></span>'); //displays on page


           // FUNCTION TO CONVERT TO FAHRENHEIT ON CLICK
            $(".metric").on('click', function () {
                $(".temp").text(data.currently.temperature);
                $(".metric").text(" F"); // Need to revert back to original state...!!?

            })