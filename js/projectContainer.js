
// tests if project preview in side bar has been clicked or not
$('.project').on('click', function() {
  console.log("made it to click");

  if ($(this).hasClass('clicked')) {
    console.log("made it to IF");
    $(this).removeClass('clicked');
    $('.projectContainer').removeClass('projectContainerTransition');

  } else {
    console.log("made it to else");
    $(this).addClass('clicked');
    $('.projectContainer').addClass('projectContainerTransition');
    $('.projectContainer').load("projectContainer.html", function() {
      console.log("load dynamic content success");
    });
  }
});
