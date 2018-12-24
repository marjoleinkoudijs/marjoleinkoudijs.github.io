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

	    // close menu pending on width < 960px
        alert('mark')
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
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('#minimize').hide();
        $('.up').hide();
    } else {
        $(':button').hide();
    }

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
