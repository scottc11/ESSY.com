// upon the about windows open do the follow transitions
function expandAbout() {
  $('.about-sidebar').addClass('about-window-transition');
  $('.modalCover').addClass('modalTransition');
}

// upon the about windows close button do the follow transitions
function collapseAbout() {
  $('.about-sidebar').removeClass('about-window-transition');
  $('.modalCover').removeClass('modalTransition');
}

$('.about-open-button').on('click', expandAbout);
$('.about-close-button').on('click', collapseAbout);

// When the 'about' windows open transition ends, slide the side buttons out of view
$('.about-sidebar').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
  var $about = $('.about-open-button');
  var $sidebar = $('.sidebar-open-button');
  var $logo = $('.logo');
  var $text = $('.pageHeading > h1');
  if ($about.hasClass('aboutButtonTransition')) {
    $about.removeClass('aboutButtonTransition');
    $sidebar.removeClass('openButtonTransition'); //button transition
    $logo.removeClass('blur-me');  //un-blur the logo
  } else {
    $about.addClass('aboutButtonTransition');
    $sidebar.addClass('openButtonTransition');
    $logo.addClass('blur-me'); // blur logo
    $text.addClass('blurry-text'); // blur heading text
  }
});
