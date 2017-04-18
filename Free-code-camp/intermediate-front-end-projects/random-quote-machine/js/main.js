$(document).ready(function() {
    $("button").on("click", function() {
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
            
        $(".quote").html(json.quote);
        $(".author").html(json.author);
        });
    });
});

