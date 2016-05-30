
// upon the project sidebar open do the follow transitions
function expandSidebar() {
  $('.projects-sidebar').addClass('expand');
  $('.modalCover').addClass('modalTransition');
  $('.sidebar-open-button').addClass('openButtonTransition');
}

// upon the project sidebar open do the follow transitions
function collapseSidebar() {
  $('.projects-sidebar').removeClass('expand');
  $('.modalCover').removeClass('modalTransition');
  $('.sidebar-open-button').removeClass('openButtonTransition');
  $('.projectContainer').removeClass('projectContainerTransition');
}


$('.sidebar-open-button').on('click', expandSidebar);
$('.sidebar-close-button').on('click', collapseSidebar);
