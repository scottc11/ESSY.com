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

// On about windows open transition, slide the side buttons out of view
$('.about-sidebar').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
  var $about = $('.about-open-button');
  var $sidebar = $('.sidebar-open-button');
  if ($about.hasClass('aboutButtonTransition')) {
    $about.removeClass('aboutButtonTransition');
    $sidebar.removeClass('openButtonTransition');
  } else {
    $about.addClass('aboutButtonTransition');
    $sidebar.addClass('openButtonTransition');
  }
});
