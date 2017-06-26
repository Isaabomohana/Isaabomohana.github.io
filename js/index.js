$(document).ready(function() {
  $(".button-collapse").sideNav({
     closeOnClick: true,
     draggable: true
  });
  $('.parallax').parallax();
  $('body').removeClass('fade-out');
  $('.scrollspy').scrollSpy();

  jQuery(document).ready(function() {
      jQuery('.post2').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
          offset: 100
         });
     jQuery('.post').addClass("hidden").viewportChecker({
         classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
         offset: 100
        });
    });
});
