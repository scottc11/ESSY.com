function expandAbout() {
  $('.about-sidebar').addClass('about-window-transition');
  $('.modalCover').addClass('modalTransition');
}

function collapseAbout() {
  $('.about-sidebar').removeClass('about-window-transition');
  $('.modalCover').removeClass('modalTransition');
}

$('.about-open-button').on('click', expandAbout);
$('.about-close-button').on('click', collapseAbout);

// TRANSITION END BUTTON DISSAPEAR
// $('about-sidebar').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
//
// });
