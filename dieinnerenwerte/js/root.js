/**
 * entry point on document loading
 * @param {type} param closure
 */
$(document).ready(function () {
   $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      $target = $(target);

      $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
         window.location.hash = target;
      });
   });
   
   $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false,
    easing: "swing"
  });
});

