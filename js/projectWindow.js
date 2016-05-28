
function expandProjectsContainer() {
  $('.projects-sidebar').addClass('expand');
  $('.modalCover').addClass('modalTransition');
}

function collapseProjectsContainer() {
  $('.projects-sidebar').removeClass('expand');
  $('.modalCover').removeClass('modalTransition');
}


$('.button1').on('click', expandProjectsContainer);
$('.button2').on('click', collapseProjectsContainer);
