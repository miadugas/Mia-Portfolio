// Time of Day Greeting
	var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good Morning');
	var afternoon = ('Good Afternoon');
	var evening = ('Good Evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 
		} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;
		} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
		}
$('.greeting').append(themessage);


//Style logic for the Navbar
(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

$('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
    $('#mainNav').addClass('navbar-reduce');
    }
})


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    } else {
    $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
});


/*--/ Star ScrollTop /--*/
	// $('.scrolltop-mf').on("click", function () {
	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	}, 1000);
	// });

	/*--/ Star Counter /--*/
	// $('.counter').counterUp({
	// 	delay: 15,
	// 	time: 2000
	// });

	/*--/ Scrolling for the Navbar /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});


	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Text Slider /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}


})(jQuery);
