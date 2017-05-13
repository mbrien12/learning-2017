
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


                //add back in?


        // To save autocomplete selection 

        $(document).ready(function () { //used this http://stackoverflow.com/questions/19675069/how-to-get-value-of-selected-item-in-autocomplete 
            $('#searchbox').on('autocompletechange change', function () {
                var searchTerm = this.value
                console.log(searchTerm);
            }).change();
        });

    }
});



////newest

 $(document).ready(function () { //used this http://stackoverflow.com/questions/19675069/how-to-get-value-of-selected-item-in-autocomplete 
            $('#searchbox').on('autocompletechange change', function () {
                var searchTerm = this.value
                
                $.ajax({
                    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm,
                    datatype: "jsonp",
                    success: function (data) {
                        console.log(data);
                    }
                })
                
            }).change();
        });



                // new ajax call to search - DOESNT WORK :(


                $("#submit").click(function () {

                    $.ajax({
                        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm,
                        dataType: "jsonp",
                        success: function (data) {
                            $('body').text(data);
                        }