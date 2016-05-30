function expandAbout() {
  $('.about-sidebar').addClass('about-window-transition')
}

function collapseAbout() {
  $('.about-sidebar').removeClass('about-window-transition')
}

$('.about-open-button').on('click', expandAbout);
$('.about-close-button').on('click', collapseAbout);
