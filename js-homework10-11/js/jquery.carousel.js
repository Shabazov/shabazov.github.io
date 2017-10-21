(function($) {

  $.fn.carousel = function (options) {

    var carousel = $('.carousel');
    var $left = $('.arrow--left');
    var $right = $('.arrow--right');
    var offSet = 161;
    var currentValue = 0;

    $left.on('click', function(){
      currentValue -= 164;
      carousel.animate({left: currentValue + "px"}, 500);
    });

    $right.on('click', function(){
      currentValue += 164;
      carousel.animate({left: currentValue + "px"}, 500);
    });

  };

})(jQuery);
