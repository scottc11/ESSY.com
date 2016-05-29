
function expandProjectsContainer() {
  $('.projects-sidebar').addClass('expand');
  $('.modalCover').addClass('modalTransition');
  $('.projects-button').addClass('projectsButtonTransition');
}

function collapseProjectsContainer() {
  $('.projects-sidebar').removeClass('expand');
  $('.modalCover').removeClass('modalTransition');
  $('.projects-button').removeClass('projectsButtonTransition');
}


$('.projects-button').on('click', expandProjectsContainer);
$('.button2').on('click', collapseProjectsContainer);
