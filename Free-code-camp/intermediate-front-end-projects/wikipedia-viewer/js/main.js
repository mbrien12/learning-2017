

//Autocomplete searchbox
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

        $(document).ready(function () {
            $('#searchbox').on('autocompletechange change', function () {
                var input = this.value
                $('#results').html('You selected: ' + input);
                console.log(input);
            }).change();
        });

    }
});




// Need to store search term as variable and print out when click search

// Use this variable to complete search term on wiki API > print to page

// Random API button ( do last)

