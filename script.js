$(document).ready(function() {
/*Sticky navigation*/
	$(".js--about-section").waypoint(function(direction) {
		if (direction=="down") {
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	});
/*Scrolling to target*/
	$(".js--scroll-to-contact").click(function()
	{
		$('html, body').animate({scrollTop: $('.js--contact-section').offset().top}, 1000);
	})
/*Smooth Scrolling*/
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
		    });
	      }
	    }
	});
	  /*Adding effects*/
	$(".js--about-section").waypoint(function(direction) {
		$(".js--about-box").addClass('animate__animated animate__fadeInUp');
	}, {
		offset:'50%'
	});
	$(".js--service-section").waypoint(function(direction) {
		$(".js--service-box").addClass('animate__animated animate__slideInUp');
	}, {
		offset:'50%'
	});
	$(".js--package-section").waypoint(function(direction) {
		$(".js--package-box").addClass('animate__animated animate__pulse');
	});

    /*Scrool-to-top-button*/
    
	var btn = $('#button');

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
    });
});





