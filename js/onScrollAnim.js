$(document).ready(function(){
    $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop();
        var books = $(".book");
        var count = 0;
        if(scrollHeight > 200){

            setInterval(function(){
                books.eq(count).css({
                    "animation": "showBooks 0.7s linear",
                    "opacity": "1"
                    });
                if(count >= books.length){
                    return false;
                } else {
                    count++;
                }
            },200);
        };

    })
})