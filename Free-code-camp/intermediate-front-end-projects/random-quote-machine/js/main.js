$(document).ready(function() {
    $("button").on("click", function() {
        $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/", function(json) {

        $(".quote").html(JSON.quote(json));
        });
    });
});

//Figure out API key - maybe try another one e.g. http://forismatic.com/en/api/ 