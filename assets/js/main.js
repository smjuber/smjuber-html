/*
 *
 * SMJUBER Custom Script File
 * v1.2.0
 *
 */

(function($) {
  	"use strict";

	// Start to write ...

	/*
	 * Functions
	 */

	$(document).ready(function() {
  		smjuberMenuToggle();
  	});


	/*
	 * Dropdown Menu
	 */

	// $body = $(document.body),
    var smjuberToggleMenu = $('#menu-toggle'),
		smjuberSiteNav = $('#primary-menu');

	// Add Menu dropdown toggle
	// var dropdownArrow = $('<span class="dropdown-icon" aria-expanded="false"><span class="screen-reader-text">' + scriptSmjuber.screenReaderText + '</span></span>');
	// smjuberSiteNav.find('.menu-item-has-children > a, .page_item_has_children > a').after(dropdownArrow);
	// smjuberSiteNav.find('.dropdown-icon').on('click', function(e) {
	// 	var smjuberThisVar = $(this);
	// 	e.preventDefault();
	// 	smjuberThisVar.toggleClass('toggled--on').attr('aria-expanded', smjuberThisVar.attr('aria-expanded') === 'false' ? 'true' : 'false');
	// 	smjuberThisVar.next('.children, .sub-menu').slideToggle();
	// });

	// Enable menu toggle
	// smjuberToggleMenu.on('click', function(){
	// 	if ( smjuberToggleMenu.hasClass( 'toggled--on' ) ) {
	// 		smjuberToggleMenu.removeClass('toggled--on').attr('aria-expanded', 'false');
	// 		$('#main-navigation').slideUp(200);
	// 	} else {
	// 		smjuberToggleMenu.addClass('toggled--on').attr('aria-expanded', 'true');
	// 		$('#main-navigation').slideDown(200);
	// 	}
	// });


	function smjuberMenuToggle() {

		// Main Menu Off Canvas Menu Open & Close
	    $('#menu-toggle').on('click', function(event) {
	    	event.preventDefault();
	        $('.main-navigation').addClass('open');
	        $('.off-canvas-overlay').addClass('on');
	        $('.site-header, .site-content, .site-footer').addClass('background-blur-mode');
	        $('body').addClass('off-canvas-unscroll');
	    });
	    $('.off-canvas-menu-close, .off-canvas-overlay').on('click keydown', function(event) {
	    	if (event.keyCode == 27 || event.target.className == 'close' || event.target == this ) {
				$('.site-header, .site-content, .site-footer').removeClass('background-blur-mode');
				$('.off-canvas-overlay').removeClass('on');
				$('.main-navigation').removeClass('open');
				$('body').removeClass('off-canvas-unscroll');
			}
	    });

	}

	$(window).on('resize orientationchange', function() {
		if ( smjuberToggleMenu.is(':hidden') ) {
			smjuberToggleMenu.removeClass('toggled--on').attr('aria-expanded', 'false');
			$('#main-navigation').removeAttr('style');
		}
	});

	/*
	 * Hidden Footer
	 */

	$('footer#colophon').siblings(':last').addClass('hidden-footer-shadow');

})(jQuery);