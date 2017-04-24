


//Generate new quote from API
$(document).ready(function() {
    $(".new_quote").on("click", function() {
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
        var quote = json.quote;
        var author = json.author;

        $(".quote").html(json.quote);
        $(".author").html(json.author);
        $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
        });
    });
});





// Twitter JS function - loads right button https://dev.twitter.com/web/javascript/loading 


window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs")); 


