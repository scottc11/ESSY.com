
function expandProjectsContainer() {
  $('.projects-container').addClass('expand');

}

function collapseProjectsContainer() {
  $('.projects-container').removeClass('expand');

}


$('.button1').on('click', expandProjectsContainer);
$('.button2').on('click', collapseProjectsContainer);
