// alert("подкл");

$(function(){
  var $buttons = $('.bar_link');
  $buttons.on('click', function(){
    var $submenu = $(this).siblings('ul');
    $submenu.slideToggle();
  });

})
