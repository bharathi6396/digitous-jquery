$("button").click(function() {
    $.ajax({
        method: "GET",
        url: "https://restcountries.eu/rest/v2/name/france",
        success: function(data, status, response) {
            console.log("name", name);
            $("#exercise").html((" <p>Country: " + data[0].name) +
            ("<p>Capital: " + data[0].capital)
                );
         }
    })  
});