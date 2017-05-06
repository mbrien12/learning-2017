

$.ajax({
    url: "https://api.darksky.net/forecast/ace5824d768c604c262956cc4d59425d/37.8267,-122.4233",
    dataType: "jsonp",
    success: function(data) {
        console.log(data);
    }
})