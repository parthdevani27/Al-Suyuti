/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('.loader').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $(".container").css("width",$(window).width());

    
    $(".home-heading-1").addClass("animated fadeInDown");
    $(".home-heading-2").addClass("animated fadeInLeft");
    $(".home-btn").addClass("animated slideInUp");
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
$(window).resize(function() {         
    $(".container").css("width",$(window).width());
 });