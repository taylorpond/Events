// Modal
$(document).ready(function() {
	$('#myButton').click(function(e) {
		e.preventDefault();
		$('#myModal').reveal();
	});
});

// To top
// When the document is loaded...
$(document).ready(function() {	
	//
	// Hide the toTop button when the page loads.
	//			$("#toTop").css("display", "none");
	
	// This function runs every time the user scrolls the page.
	//			$(window).scroll(function(){
	
	// Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
	//				if($(window).scrollTop() > 0){
	
	// If it's more than or equal to 0, show the toTop button.
	//					console.log("is more");
	//					$("#toTop").fadeIn("slow");
	//				}
	//				else {
	// If it's less than 0 (at the top), hide the toTop button.
	//					console.log("is less");
	//					$("#toTop").fadeOut("slow");
	
	//				}
	//			});
	// When the user clicks the toTop button, we want the page to scroll to the top.
	$("#toTop > a").click(function(event){
		// Disable the default behaviour when a user clicks an empty anchor link.
		// (The page jumps to the top instead of // animating)
		event.preventDefault();
		// Animate the scrolling motion.
		$("html, body").animate({
			scrollTop:0
		},"slow");
	});
});
// Scrollbar
function initScrollbar() {
	buttonsClass("div.social_button");
	buttonsClass("div.scroll_button");
	$("#scrollbar1").scrollbar({
		type: "scrollbar",			// ->scrollbar || mousePosition || dragAndDrop
		//+++++++++++++MAIN PROPERTIES++++++++++++++//
		height:220, 				// Height of the content's mask block
		
		// Width fixed number or auto of the content
		scrollerEase:7, 			// Scroll ease
		dragVertical:true,			// Drag Verticaly or not
		dragHorizontal:false,		// Drag Horizontaly or not
		//++++++++SCROLL BAR TYPE PROPERTIES++++++++//
		barWidth:5, 				// Width of the scroller bars
		draggerVerticalSize:"auto",	// Height of the dragger, can be fixed or auto
		draggerHorizontalSize:"auto",
		roundCorners:0,			// Bars round corners amplitude
		distanceFromBar: 5,			// Distance between the bars and the content
		mouseWheel: true,			// Wheter to use or not mouse wheel detection
		mouseWheelOrientation: "vertical",	// Wheter to use or not mouse wheel detection
		mouseWheelSpeed: 13,		// Mouse wheel scroll speed
		draggerColor: "#111111",		// Dragger color
		draggerOverColor: "#a1dc13",	// Dragger color on over
		barColor: "#E6E6E6",		// Back bar color
		barOverColor: "#CCCCCC"		// Back bar color on over
	});
}
$(document).ready(initScrollbar);
$(window).resize(initScrollbar);

// ticker script
(function($){
	$(window).load(function(){
		var $countdown = $("#countdown");
		
		// Calculate the amount of time to display in the countdown
		var now = new Date();
		var kickoff = Date.parse($countdown.attr("data-eventdate"));
		var diff = kickoff - now;
					
		var days = Math.floor( diff / (1000*60*60*24) );
		var hours = Math.floor( diff / (1000*60*60) );
		var mins = Math.floor( diff / (1000*60) );
		var secs = Math.floor( diff / 1000 );
					
		var dd = days;
		var hh = hours - days * 24;
		var mm = mins - hours * 60;
		var ss = secs - mins * 60;

		$('#countdown').countdown({
			timestamp	: {	
				'days'		: dd,
				'hours'		: hh,
				'minutes' 	: mm,
				'seconds' 	: ss
			},
			duration	: 360,
			callback	: function(ddays, hhours/*, mminutes, sseconds*/){
				var message = "";
				// Get the label translations for the data- attributes
				var dayslabel = $countdown.attr("data-days");
				var hourslabel = $countdown.attr("data-hours");
				
				// Change to singular if in English
				if (ddays == 1 && dayslabel == "days") {
					dayslabel = "day";	
				}
				if (hhours == 1 && hourslabel == "hours") {
					hourslabel = "hour";	
				}
				// Build the message string
				message += ddays + " " + dayslabel + ", ";
				message += hhours + " " + hourslabel;
				// Write out the message
				$('.callback').html(message);
			}
		});
		
		// Hide the countdown if it's over 99 days since there are only two digits
		if (days > 99) {
			$(".countdownHolder").hide();
		}

	});
})(jQuery)

// dropdown language
$("#dropdown, #dropdown-mobile").on("click", function(e){ 
	if($(this).hasClass("open")) { 
		$(this).removeClass("open"); 
		$(this).children("ul").slideUp("fast"); 
	} else { 
		$(this).addClass("open"); 
		$(this).children("ul").slideDown("fast"); 
	} 
});

// Scroll to function 
if ($("#one").length) { // Only use if it's the main page.
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 350);
				return false;
			}
		}
	});
} else {
	// If it's not the main page, prepend the links to go back to the index of the current directory.
	// Proabaly not the ideal way to handle it, i.e. doesn't account for pages in other directories, but works for now.
	$('a[href*=#]:not([href=#])').each(function() {
		var lnk = $(this);
		var href = lnk.attr("href");
        $(this).attr("href", "./" + href);
    });
}

$(document).ready(function(e) {

	// Scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	});
	
	// Initialize scripts for ecard
    if (typeof (ecard) != "undefined") {
        ecard.init();
    }
	
	// TP Slideshow
	$("#slideshow img:first-child").fadeIn(5000, function() {
		$("#slideshow").tpslider({
			rotationSpeed: 15000,
			transitionSpeed: 5000	
		});
	});
	
	// Gallery
	$("#gallery a").fancybox();
	
});
