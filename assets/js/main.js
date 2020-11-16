

// FOR NAVBAR FIXED
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".navbar").addClass("navbar-fixed");
    }else{
        $(".navbar").removeClass("navbar-fixed");
    }
});


