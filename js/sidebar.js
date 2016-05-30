
// upon the project sidebar open do the follow transitions
function expandSidebar() {
  $('.projects-sidebar').addClass('expand');
  $('.modalCover').addClass('modalTransition');
  $('.sidebar-open-button').addClass('openButtonTransition');
  $('.about-open-button').addClass('aboutButtonTransition');
  $('.logo').addClass('blur-me'); // blur logo
  $('.pageHeading > h1').addClass('blurry-text'); // blur heading text
}

// upon the project sidebar open do the follow transitions
function collapseSidebar() {
  $('.projects-sidebar').removeClass('expand');
  $('.modalCover').removeClass('modalTransition');
  $('.sidebar-open-button').removeClass('openButtonTransition');
  $('.about-open-button').removeClass('aboutButtonTransition');
  $('.projectContainer').removeClass('projectContainerTransition');
  $('.logo').removeClass('blur-me');  //un-blur the logo
  $('.pageHeading > h1').removeClass('blurry-text'); // blur heading text
}


$('.sidebar-open-button').on('click', expandSidebar);
$('.sidebar-close-button').on('click', collapseSidebar);
