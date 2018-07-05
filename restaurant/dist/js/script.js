
$(document).ready(function(){
  $('#my-slide').DrSlider({
    showProgress: false,
    showNavigation: false,
    pauseOnHover: true,
    // userCSS: true
  }); //Yes! that's it!

  $('#banner').animate({
    top: '10rem'
  }, 2000);
});