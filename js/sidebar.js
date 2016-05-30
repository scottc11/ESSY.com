
// upon the project sidebar open do the follow transitions
function expandSidebar() {
  $('.projects-sidebar').addClass('expand');
  $('.modalCover').addClass('modalTransition');
  $('.sidebar-open-button').addClass('openButtonTransition');
  $('.about-open-button').addClass('aboutButtonTransition');
  $('.logo').addClass('blur-me'); // blur logo
  $('.pageHeading > h1').addClass('blurry-text'); // blur heading text
  $('#homeSketchContainer').fadeToggle();
  $('.project-list').addClass('displayProjectList');
}

// upon the project sidebar open do the follow transitions
function collapseSidebar() {
  $('.projects-sidebar').removeClass('expand');
  $('.modalCover').removeClass('modalTransition');
  $('.project-list').removeClass('displayProjectList');
  $('.sidebar-open-button').removeClass('openButtonTransition');
  $('.about-open-button').removeClass('aboutButtonTransition');
  $('.projectContainer').removeClass('projectContainerTransition');
  $('.logo').removeClass('blur-me');  //un-blur the logo
  $('.pageHeading > h1').removeClass('blurry-text'); // blur heading text
  $('#homeSketchContainer').fadeToggle();
}


$('.sidebar-open-button').on('click', expandSidebar);
$('.sidebar-close-button').on('click', collapseSidebar);


// NOT IN USE
// When the 'about' windows open transition ends, slide the side buttons out of view
$('.projects-sidebar').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
  var $list = $('.project-list');


  if ($list.hasClass('displayProjectList')) {

  } else {

  }
});
