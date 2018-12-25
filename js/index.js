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
	       }, 1000);

	    // Close menu pending on width < 960px
        alert('mark')
	    if (window.matchMedia("(max-width: 960px)").matches) {
		  $('.navbar-toggler').click();
		}
	});

    // // Minimize number of brands pending on screen width < 768px
    function mywindow(x) {
        if (x.matches) {
            $('#minimize').hide();
            $('.up').hide();
            $('.down').show();
        } else {
            $('#minimize').show();
            $(':button').hide();
        }
    }
    var x = window.matchMedia("(max-width: 768px)")
    mywindow(x)
    x.addListener(mywindow)

    // Section down
    $(".down").click( function(){
        $('.down').hide();
        $("#minimize").slideDown(1000);
        delayicon('.up');
    });
    // Section up
    $(".up").click( function(){
        $('.up').hide();
        $("#minimize").slideUp(1000);
        $('body,html').animate({
           scrollTop: $('#assortiment').offset().top - 56
           }, 1000);
        delayicon('.down');
    });

    // Supported fuction section up/down
    function delayicon(icon) {
    setTimeout(function(){ 
        $(icon).show();
        }, 1000);
    }
    
    // Icon color-switch when hovering
    $('#footer a').hover(function(){
    	$(this).find('img').toggleClass('iconHover')
    });
});
