
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');



    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // Input variables

    var streetName = $('#street').val();
    var cityName = $('#city').val();
    var address = streetName + ', ' + cityName;



    // Greeting
    $greeting.text('So you want to live at ' + address + '?');

    // Background image

    var googleMapsBaseUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    var googleMapsURL = googleMapsBaseUrl + address;
    var backgroundImage = "<img class = 'bgimg' src = '" + googleMapsURL + "''>";
    $body.append(backgroundImage);





    return false;
};

// When someone hits submit - it will load 'loadData function' above
$('#form-container').submit(loadData); 
