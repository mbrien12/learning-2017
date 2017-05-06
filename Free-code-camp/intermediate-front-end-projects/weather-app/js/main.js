


$.ajax({
    url: "https://api.darksky.net/forecast/ace5824d768c604c262956cc4d59425d/51.520648,-0.066424",
    dataType: "jsonp",
    success: function (data) {
        console.log(data); //remove at end
        console.log(data.currently.temperature); //remove at end
        function toCelsius(f) {
            return (5 / 9) * (f - 32);

        }
        var celsius = toCelsius(data.currently.temperature);
        var celsiusRound = Math.round(celsius);
        // calculation to return Centigrade as a variable, then put below
        $(".temp").text(celsiusRound); //changes temp (to F)
    }
})

// If temp below X show winter > if temp inbetween X-X show grey and if above X show summer

// on click of temp (as link - underline?) - translate to F.

//If Precipprobably 0 - show sun and sunglasses message if 1 show rain and umbrella message