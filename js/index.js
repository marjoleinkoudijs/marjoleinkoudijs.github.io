$(document).ready(function () {

	// Load page
	$('#page').fadeIn(1500);

  	// Navbar (transparant to solid when scrolling down/up)
    $(window).scroll(function() {
      	if($(this).scrollTop() > 60) { 
          	$('.navbar').addClass('solid');
      	} else {
          	$('.navbar').removeClass('solid');
      	}
    });

    // Navbar (smooth scrolling)
    var scrollLink = $('.scroll');
	scrollLink.click(function(e) {
		e.preventDefault();
	    $('body,html').animate({
	    	scrollTop: $(this.hash).offset().top - 56
	    }, 750 );

	    // close menu pending on width < 960px
	    if (window.matchMedia("(max-width: 960px)").matches) {
			$('.navbar-toggler').click();
		}
	});

    // Footer (icon color-witch when hovering)
    $('#footer a').hover(function(){
    	$(this).find('img').toggleClass('iconHover')
    });

});
