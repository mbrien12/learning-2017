
//Get location 

navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var geoCodeAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyB3mYEF889VBLg_-ATuGqi8Vs9Ri9iSowo';

    $.getJSON(geoCodeAPI, function (data) {
        console.log(data.results[0].address_components[2].long_name); // this returns city name
        var city = data.results[0].address_components[2].long_name; // bringing back URL instead of name :S - try this http://stackoverflow.com/questions/6359995/get-city-from-geocoder-results 
        $(".location").text(city);
        console.log(latitude, longitude);

    });

    // weather api
    $.ajax({
        url: 'https://api.darksky.net/forecast/ace5824d768c604c262956cc4d59425d/' + latitude + ',' + longitude,
        dataType: "jsonp",
        success: function (data) {
            console.log(data); //remove at end
            console.log(data.currently.temperature); //remove at end


            // FUNCTION TO CONVERT TO CELSIUS AND DISPLAY ON PAGE
            function toCelsius(f) { // equation to conver from fahrenheit to celsius
                return (5 / 9) * (f - 32);
            }
            var celsius = toCelsius(data.currently.temperature); // converts from API
            var celsiusRound = Math.round(celsius); //rounds up number
            $(".temp").text(celsiusRound); //displays on page


            // FUNCTION TO CONVERT TO FAHRENHEIT ON CLICK
            $(".metric").on('click', function () {
                $(".temp").text(data.currently.temperature);
                $(".metric").text(" F"); // Need to revert back to original state...!!?

            })

       // UPDATING BACKGROUND IMAGE

            var cold = 'https://unsplash.it/1920/1080?image=1036';
            var average = 'https://unsplash.it/1920/1080?image=1061';
            var hot = 'https://unsplash.it/1920/1080?image=871';

            if (celsiusRound < 10) {
                $('body').css('background-image', 'url(' + cold + ')');
            } else if (celsiusRound < 20) {
                $('body').css('background-image', 'url(' + average + ')');
            } else {
                $('body').css('background-image', 'url(' + hot + ')');
            }

        
        //UPDATING ICON AND MESSAGE

        if (data.currently.precipProbability == 1) {
            $('.icon').attr('src', 'images/rain.png');
            $('.advice').text("Don't forget your umbrella today!");
        } else {
            $('.icon').attr('src', 'images/white-sun.png');
            $('.advice').text("You may need some sunglasses today!");
        }




        }

    });

})



// If temp below X show winter > if temp inbetween X-X show grey and if above X show summer (account for both F & C). Source three images from unsplash.it

// have a loading state before api shows data

//If Precipprobably 0 - show sun and sunglasses message if 1 show rain and umbrella message