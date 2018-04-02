$(document).ready(function(){


    function autoSlider() {
    
        var $activeImg = $("img.activeImg"),
            $activeImgIndex = $("img.activeImg").index(),
            $nextImgIndex = $activeImgIndex + 1,
            $nextImg = $(".slider-wrapper img").eq($nextImgIndex);

        $activeImg.fadeOut("slow");
        $activeImg.removeClass("activeImg");
        
        if($nextImgIndex == $(".slider-wrapper img:last").index() + 1){
            $(".slider-wrapper img").eq(0).fadeIn("slow");
            $(".slider-wrapper img").eq(0).addClass("activeImg");
        } else {
            $nextImg.fadeIn("slow");
            $nextImg.addClass("activeImg");
        }
    }

    setInterval(autoSlider, 4000);

    $(".btn-prev").click(function(){
        var $activeImg = $("img.activeImg"),
            $activeImgIndex = $("img.active").index(),
            $prevImgIndex = $activeImgIndex - 1,
            $prevImg = $(".slider-wrapper img").eq($prevImgIndex);

        $activeImg.fadeOut("slow");
        $activeImg.removeClass("activeImg");

        $prevImg.fadeIn("slow");
        $prevImg.addClass("activeImg");
    })

    $(".btn-next").click(autoSlider);
}) 