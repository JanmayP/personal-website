$(document).ready(function(){
    $("#whoa").hide();
    $("#whoa1").click(function(){
        $("#whoa").show();
        setTimeout(
            function() 
            {
              $("#whoa").hide();
            }, 3500);
    });
    
});