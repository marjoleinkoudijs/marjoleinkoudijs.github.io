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

    // Window resize
    $(window).resize(function(){
        var id;
        clearTimeout(id);
        id = setTimeout(resizeComplete, 600);
        var ww = $(window).width();
    });
    function resizeComplete(){
        var ww = $(window).width();
    }

    // Limit number of brands
    if ((window.matchMedia("(max-width: 768px)").matches) || ww<768) {
        // alert('smaller');
        $('#minimize').hide();
        $('.up').hide();
    } else {
        $(':button').hide();
    }

    // Section down
    $(".down").click( function(){
        $("#minimize").slideDown(1000);
        $('.down').hide();
        $('.up').show();
    });
    // Section up
    $(".up").click( function(){
        $("#minimize").slideUp(1000);
        $('.down').show();
        $('.up').hide();
    });
    
    // Icon color-switch when hovering
    $('#footer a').hover(function(){
    	$(this).find('img').toggleClass('iconHover')
    });
});
