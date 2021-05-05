$(document).ready(function () {
    console.log("exo-19");
    $(function () {
            $("button","#exercise").click(function (){
                $('input[value=""]').hide();
                $('input[type="text"]').focus();
            });
        
    });

});