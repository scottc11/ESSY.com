// upon the about windows open do the follow transitions
function expandAbout() {
  $('.about-sidebar').addClass('about-window-transition');
  $('.modalCover').addClass('modalTransition');
  $('.about-open-button').addClass('aboutButtonTransition');
  $('.sidebar-open-button').addClass('openButtonTransition');
  $('.logo').addClass('blur-me'); // blur logo
  $('.pageHeading > h1').addClass('blurry-text'); // blur heading text
}

// upon the about windows close button do the follow transitions
function collapseAbout() {
  $('.about-sidebar').removeClass('about-window-transition');
  $('.modalCover').removeClass('modalTransition');
  $('.logo').removeClass('blur-me');  //un-blur the logo
  $('.pageHeading > h1').removeClass('blurry-text'); // blur heading text
  $('.about-open-button').removeClass('aboutButtonTransition');
  $('.sidebar-open-button').removeClass('openButtonTransition'); //button transition
}

$('.about-open-button').on('click', expandAbout);
$('.about-close-button').on('click', collapseAbout);

// NOT IN USE
// When the 'about' windows open transition ends, slide the side buttons out of view
$('.about-sidebar').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
  var $about = $('.about-open-button');
  var $sidebar = $('.sidebar-open-button');


  if ($about.hasClass('aboutButtonTransition')) {


  } else {


  }
});
