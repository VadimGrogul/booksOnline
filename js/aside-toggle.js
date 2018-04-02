$(document).ready(function(){
    $(".category-name").click(function(){
        var dataGenres = $(this).attr("data-genres");
        $(dataGenres).slideToggle(300);
    })
})