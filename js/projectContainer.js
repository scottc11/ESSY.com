
// tests if project preview in side bar has been clicked or not
$('.project').on('click', function() {

  if ($(this).hasClass('project-1')) {
    $(this).addClass('clicked');
    $('.projectContainer').addClass('projectContainerTransition');
    $('.projectContainer').load("project-1-container.html", function() {
      console.log("load dynamic content success");
    });
  }
  if ($(this).hasClass('project-2')) {
    $(this).addClass('clicked');
    $('.projectContainer').addClass('projectContainerTransition');
    $('.projectContainer').load("project-2-container.html", function() {
      console.log("load dynamic content success");
    });
  }
  if ($(this).hasClass('project-3')) {
    $(this).addClass('clicked');
    $('.projectContainer').addClass('projectContainerTransition');
    $('.projectContainer').load("project-3-container.html", function() {
      console.log("load dynamic content success");
    });
  }
  //
  // if ($(this).hasClass('clicked')) {
  //   $(this).removeClass('clicked');
  //   $('.projectContainer').removeClass('projectContainerTransition');
  //
  // } else {
  //   $(this).addClass('clicked');
  //   $('.projectContainer').addClass('projectContainerTransition');
  //   $('.projectContainer').load("project-1-container.html", function() {
  //     console.log("load dynamic content success");
  //   });
  // }
});
