
function searchWikipedia() {

    var $wikiElem = $('wikipedia-links');

// Search

$("#searchbox").on("keyup", function(){
    var searchRequest = $(this).val(); //this stores search input. Now need to search API 'onclick' of submit
    console.log(searchRequest); // does not seem to be saving??
})

// Wikipedia AJAX request with JSONP

$("#search").on('click', function() {

$.ajax({
url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchRequest,
datatype: "jsonp",
success: function(data) {
    for (var i = 0; i <= data[1].length - 1; i++) {
                var pageLink = '<li><a href="' + data[3][i] + '">' + data[1][i] + '</a></li>';
                $.wikiElem.append(pageLink);
                console.log(pageLink); //
};
}
});



})

return false
};


//Submit search term (vanilla JS)

var search = document.getElementById("searchbox");
var submit = document.getElementById("submit");

submit.addEventListener('click', function(searchQuery) {
console.log(search);
})


  $("body").html($("#searchbox").val());


  for (var i = 0; i <= data[1].length - 1; i++) {
                var pageLink = '<li><a href="' + data[3][i] + '">' + data[1][i] + '</a></li>';
                document.getElementById("results").append(pageLink);