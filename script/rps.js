$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".nav").addClass("navScrolled");
    } else {
        $(".nav").removeClass("navScrolled");
    }
});