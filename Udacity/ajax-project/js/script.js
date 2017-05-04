
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


    // Guardian AJAX request

    var guardianUrl = 'https://content.guardianapis.com/search?q=' + cityName + '&order-by=newest&api-key=475649b2-5ea2-4ea3-aa59-2ceeb6bab09e '

    $.getJSON(guardianUrl, function (data) {
        console.log(data);

        $nytHeaderElem.text('Guardian articles about ' + cityName);

        articles = data.response.results;

        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];

            $nytElem.append('<li class="article">' + '<p>' + article.sectionName + '</p>' +
                '<a href="' + article.webUrl + '">' + article.webTitle + '</a>' +
                '</li>');
        };


    }).error(function () {
        $nytHeaderElem.text("Sorry articles can't be loaded right now");

    });


    // Wikipedia AJAX request with JSONP

    var wikiRequestTimeout = setTimeout(function () {
        $wikiElem.text("Failed to get Wikipedia resources");
    }, 8000);

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + cityName,
        dataType: "jsonp",
        success: function (data) {
            for (var i = 0; i <= data[1].length - 1; i++) {
                var pageLink = '<li><a href="' + data[3][i] + '">' + data[1][i] + '</a></li>';
                $wikiElem.append(pageLink);
            };

            clearTimeout(wikiRequestTimeout);

        }
    })




    return false;
};

// When someone hits submit - it will load 'loadData function' above
$('#form-container').submit(loadData); 
