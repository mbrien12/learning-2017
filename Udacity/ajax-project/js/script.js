
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
    $greeting.text('So you want to live in ' + address + '?');

    // Background image

    var googleMapsBaseUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    var googleMapsURL = googleMapsBaseUrl + address;
    var backgroundImage = "<img class = 'bgimg' src = '" + googleMapsURL + "''>";
    $body.append(backgroundImage);


    // NYT AJAX request

    var newYorkTimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityName + '&sort=newest&api-key=951b40500d3f459b95d23b5dfdba9a05'

    $.getJSON(newYorkTimesUrl, function (data) {
        console.log(data);

        $nytHeaderElem.text('New York Times articles about ' + cityName);

        articles = data.response.docs;


        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];

            $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' +
                '<p>' + article.snippet + '</p>' +
                '</li>');
        };
    })







    return false;
};

// When someone hits submit - it will load 'loadData function' above
$('#form-container').submit(loadData); 
