

//Autocomplete searchbox from http://w3lessons.info/2015/03/01/autocomplete-search-using-wikipedia-api-and-jquery-ui/ 
$("#searchbox").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function (data) {
                response(data[1]);
                console.log(data[1]);


            }




        });


        // To save autocomplete selection 
        $("#searchbox").autocomplete({
            select: function (event, ui) {
                var searchTerm = ui.item.label;
                console.log(searchTerm);




                $.ajax({
                    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm,
                    dataType: "jsonp",
                    success: function (data) {
                        console.log(data);
                        for (var i = 0; i <= data[1].length - 1; i++) {
                            var pageLink = '<li><a href="' + data[3][i] + '">' + data[1][i] + '</a></li>';
                            $("#results").append(pageLink);
                        };


                    }

                })

                $("#searchbox") //replaces content with new selection
                    .change(function () {
                        var str = "";
                        $("#searchbox option:selected").each(function () {
                            str += $(this).text() + " ";
                        });
                        $("#results").text(str);
                    })
                    .change();



            }
        });

    }
});



// to clear input field  - BUT DOESN'T CLEAR LIST (but clicking search does?)
$("#searchbox").autocomplete({
    close: function (event, ui) {
        // Close event fires when selection options closes
        $('#searchbox')[0].value = ""; // Clear the input field 

    },



})







// Random API button ( do last)

