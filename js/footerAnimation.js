$(document).ready(function(){

    $(".genre-row").css("opacity", 0);

    $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop();
        var genreRow = $(".genre-row");
        var count = 0;

        if(scrollHeight > 1000) {
            setInterval(function(){
                genreRow.eq(count).animate({"opacity": 1});

                if(count >= genreRow.length){
                    return false;
                } else {
                    count++;
                }
            }, 400);
        };
    });
});