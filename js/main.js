jQuery(document).ready(function( $ ) {

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });


});



/* CUSTOM */
/*  Removes ugly grey nomics ad bar below graphs */

$(window).on('load', function(){
  setTimeout(removeBars, 0001); //wait for page load + time
});//remove the bars...
function removeBars(){
document.querySelectorAll('.nomics-ticker-widget-footer').forEach(function(a){
a.remove()
}) 
};