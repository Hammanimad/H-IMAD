
(function ($) {
	"use strict";


	// preloader
	$(window).on('load', function () {
		$('#preloader').delay(10).fadeOut('slow');
		$('body').delay(10).css({ 'overflow': 'visible' });
	});

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	// MOBILE MENU CLICKABLE 
	$('.open-mobile-menu').on('click', function () {
		$('.mobile_info_open').addClass('show');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.close_info,.offcanvas-overlay,.mobile_one_page li.menu-item a.nav-link').on('click', function () {
		$('.mobile_info_open').removeClass('show');
		$('.offcanvas-overlay').removeClass('overlay-open');
	});

	const tilt = $('.js-tilt').tilt();


	//   7. Header Sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	// wow js active 

	new WOW().init();

	// isotop 

	  // isotop
	  $(".grid").imagesLoaded(function() {
		// init Isotope
		var $grid = $(".grid").isotope({
		  itemSelector: ".portfolio",
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: ".portfolio"
		  }
		});
	
		// filter items on button click
		$(".portfolio__menu").on("click", "button", function() {
		  var filterValue = $(this).attr("data-filter");
		  $grid.isotope({ filter: filterValue });
		});
	
		//for menu active class
		$(".portfolio__menu button").on("click", function(event) {
		  $(this)
			.siblings(".active")
			.removeClass("active");
		  $(this).addClass("active");
		  event.preventDefault();
		});
	  });

	//   progresbar 
	
	$(".progress-bar").ProgressBar();

	/* 


	-----------------------------
	SLICK ACTIVATION BLOG HOMEPAGE ONE
	-----------------------------
	
	*/
	//testimonial single active
	var swiper = new Swiper(".karti__brand-item", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		loop: true,
		speed: 1000,
		// width: 470,
		slidesPerView: 7,

		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 3,
			  spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
			  slidesPerView: 4,
			  spaceBetween: 40
			},
			1200: {
			  slidesPerView: 7,
			  spaceBetween: 40
			}
		 }

      });




	  

})(jQuery);