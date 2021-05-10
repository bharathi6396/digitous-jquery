
$("button").click(function() {
    let pays = $("input").val();
     let url = "https://restcountries.eu/rest/v2/name/" + pays;
    console.log(url);
    $.ajax({
        method: "GET",
        url: "https://restcountries.eu/rest/v2/name/" + pays,
         
        success: function(data, status, response) {
            // console.log("name", name);
            $("#country").html(" <span>" + data[0].name + "</span>") 
            $("#capital").html("<span>" + data[0].capital + "</span>");
         }
    })  
});
