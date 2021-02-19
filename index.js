$(document).ready(function() {
    $(".tab").click(function () {
        
        $(this).addClass("active");
        $(other).removeClass("active");
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#conclusion').fadeIn();
    } else {
        $('#conclusion').fadeOut();
    }
});

$("#conclusion").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});


$('#main-content').scrollspy({ target: '.sidebar-sticky' })