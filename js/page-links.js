$(document).ready(function(){
    $(".pages-list a").click(function(){
        $(".pages-list a").removeClass("active-page");
        $(this).addClass("active-page");
    })
})