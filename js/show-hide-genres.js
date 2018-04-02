$(document).ready(function(){
    $(".show-hide-genres").click(function(){
        var $toggleGenres = $(".aside");

        if($toggleGenres.css("left") < 0 + "px") {
            $toggleGenres.animate({"left": "10px"});
        } else {
            $toggleGenres.animate({"left": "-195px"});
        };
    });

    
});