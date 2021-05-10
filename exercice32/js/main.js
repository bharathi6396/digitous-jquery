$("button").click(function() {
    $.ajax({
        method: "GET",
        url: "https://restcountries.eu/rest/v2/name/france",
        success: function(data, status, response) {
            console.log("name", name);
            console.log("Mon pays est " + data[0].name);
            console.log("Mon capital est " + data[0].capital); 
         
         }
    })  
});