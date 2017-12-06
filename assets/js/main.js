"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    /*---------------------------------------------*
     * Portfolio Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
/*----------------------------------------------------*/
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});
    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
        event.preventDefault();
        //$('.home-main-content').addClass('move-out');
        $('#main-nav').addClass('is-visible');
		$('#triggerit').addClass('hideit');
        $('.cd-shadow-layer').addClass('is-visible');
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        //$('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
		$('#triggerit').removeClass('hideit');
        $('.cd-shadow-layer').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
                $window_height = $(window).height(),
                $header_top = $window_height - $header_height,
                $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        //$('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
		$('#triggerit').removeClass('hideit');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });

    // Static variables - That do not change while scrolling
var header = $("#logohead"),
    headerHeight = header.height(), // Get height of header
        logo = $(".logo"), // Get the logo
        logoHeight = logo.height(), // Get logo height
        scrollTo = 900; // Animation until scrolled to this point

// Scroll function
$(window).on("scroll", function() {
  // Dynamic variables - That do change while scrolling
  var yPos = $(this).scrollTop(), // Get the scroll Y-position
      yPer = (yPos / scrollTo); // Calculate percenage of scroll

  // If percentage is over 100, set to 100
  if (yPer > 1) {
    yPer = 1;
  }
  // Dynamic variables for the elements
  var logoPos = ( -1*(yPer*50)+50), // Calculate position of logo (starting from 50%)
        logoSize = ((headerHeight*yPer)-(logoHeight*yPer)+logoHeight), // Calculate new size height for logo
        headerPos = ((yPer * headerHeight) - headerHeight); // Calculate position of header (starting from minus the height of itself)

  // Change the top, left, transform and height of the logo
  logo.css({
    top: logoPos + "%",
    left: logoPos + "%",
    transform: "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)",
    height: logoSize
  });
  // Change the transform and opacity of the header
  $('#logohead').css({
    //transform: "translate3d(0," + headerPos + "px,0)",
        top: headerPos,
    opacity: yPer
  });
});
    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

//    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

//        var wow = new WOW({
//            mobile: false // trigger animations on mobile devices (default is true)
//        });
//        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.testimonials').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        autoplayHoverPause: true
//
//    });


    //End
});
