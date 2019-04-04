$(document).ready(function(){
    $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop();
        var books = $(".book");
        var booksContent = $('.book');
        var count = 0;
        if(scrollHeight > 200){
            booksContent.css('opacity', '1');
        };

    })
})