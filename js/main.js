// Modal
$(document).ready(function() {
$('#myButton').click(function(e) {
e.preventDefault();
$('#myModal').reveal();
});
});
// To top
// When the document is loaded...
$(document).ready(function()
{	
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
$("#toTop").click(function(){
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
jQuery(document).ready(function($) {
buttonsClass("div.social_button");
buttonsClass("div.scroll_button");
$("#scrollbar1").scrollbar({	type: "scrollbar",			// ->scrollbar || mousePosition || dragAndDrop
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
});
$(window).resize(function() {
buttonsClass("div.social_button");
buttonsClass("div.scroll_button");
$("#scrollbar1").scrollbar({	type: "scrollbar",			// ->scrollbar || mousePosition || dragAndDrop
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
});
// ticker script
(function($){
$(window).load(function(){
$('#countdown').countdown({
timestamp	: {	'days'		: 1,
'hours'		: 0,
'minutes' 	: 0,
'seconds' 	: 10
},
duration	: 360,
callback	: function(days, hours/*, minutes, seconds*/){
var message = "";
message += days + " day" + ( days==1 ? '':'s' ) + ", ";
message += hours + " hour" + ( hours==1 ? '':'s' );
/* message += minutes + " min" + ( minutes==1 ? '':'s' ) + " and ";
message += seconds + " s  <br />";*/
$('.callback').html(message);
}
})
})
})(jQuery)	
// dropdown language
$("#dropdown").on("click", function(e){ e.preventDefault(); if($(this).hasClass("open")) { $(this).removeClass("open"); $(this).children("ul").slideUp("fast"); } else { $(this).addClass("open"); $(this).children("ul").slideDown("fast"); } });
$("#dropdown-mobile").on("click", function(e){ e.preventDefault(); if($(this).hasClass("open")) { $(this).removeClass("open"); $(this).children("ul").slideUp("fast"); } else { $(this).addClass("open"); $(this).children("ul").slideDown("fast"); } });
// Scroll to function 
$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
|| location.hostname == this.hostname) {
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

// Scrollspy
$('[data-spy="scroll"]').each(function () {
var $spy = $(this).scrollspy('refresh')
});

