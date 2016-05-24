
function expandProjectWindow() {
  $('.projectLightbox').fadeToggle(400);
}

function expandSketchWindow() {
  $('.sketchWindow').fadeToggle(400);
}


$('.block1').on('click', expandProjectWindow);
$('.block2').on('click', expandSketchWindow);
