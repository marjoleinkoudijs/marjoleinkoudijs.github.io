$(document).ready(function () {

    // Load page
	$('#page').fadeIn(1500);

    // OPTIONAL Popup
    // Open popup
    setTimeout(function() {
        $('#popup').modal();
    }, 2000);
    // Close popup
    var modalclose = document.getElementsByClassName("modal-close")[0];
    modalclose.onclick = function() {
        $('#popup').modal('hide')
    }
    // Icon color-switch when hovering
    $('#popup span').hover(function(){
        $(this).find('img').toggleClass('iconHover')
    });

  	// Navbar (transparant to solid when scrolling down/up)
    $(window).scroll(function() {
      	if($(this).scrollTop() > 70) { 
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
	       scrollTop: $(this.hash).offset().top - 72
	       }, 1000);

	    // Close menu pending on width < 960px
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
        $('.up').show(1000);
    });
    // Section up
    $(".up").click( function(){
        $('.up').hide();
        $('.down').show(1000);
        $("#minimize").slideUp(1000);
        $('html, body').animate({scrollTop: $('#assortiment').offset().top - 72}, 1000);
    });
    
    // Footer active when scrolled to bottom
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 180) {
            $(".navbar-nav").find(".active").removeClass("active");
            $(".last").addClass("active");
        }
    });

    // Icon color-switch when hovering
    $('#footer a').hover(function(){
    	$(this).find('img').toggleClass('iconHover')
    });
});

