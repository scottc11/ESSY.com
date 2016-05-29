
// tests if project preview in side bar has been clicked or not
$('.project').on('click', function() {

  if ($(this).hasClass('clicked')) {

    $(this).removeClass('clicked');
    $('.projectWindow').removeClass('projectWindowTransition');
    
  } else {

    $(this).addClass('clicked');
    $('.projectWindow').addClass('projectWindowTransition');
  }
});
