
function expandSidebar() {
  $('.projects-sidebar').addClass('expand');
  $('.modalCover').addClass('modalTransition');
  $('.sidebar-open-button').addClass('openButtonTransition');
}

function collapseSidebar() {
  $('.projects-sidebar').removeClass('expand');
  $('.modalCover').removeClass('modalTransition');
  $('.sidebar-open-button').removeClass('openButtonTransition');
  $('.projectContainer').removeClass('projectContainerTransition');
}


$('.sidebar-open-button').on('click', expandSidebar);
$('.sidebar-close-button').on('click', collapseSidebar);
