/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('.loader').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});
/* =========================================
              nav size
============================================ */
$(window).on('load', function () {
    $(".container").css("width",$(window).width());
       console.log('wid',$(window).width());
});
$(window).resize(function() {         
    $(".container").css("width",$(window).width());
    console.log('wid',$(window).width());
 });