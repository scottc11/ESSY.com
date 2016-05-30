
$(window).on('scroll', function() {
  var $window = $(this);
  // returns number of pixels scrolled
  var pxScrolled = $window.scrollTop();
  // console.log(pxScrolled);

  var sketchHeight = $('#canvas-container').height();

})

// Preloader for main page
// Wait for window load
$(window).load(function() {
	// Animate loader off screen
	$(".preloader").fadeOut("slow");;
});
