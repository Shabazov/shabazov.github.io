//jqjqjqjqjq

$(document).ready(function(event){

  console.log("jQuery");

  $('body').append('<div>');
  var $wrapper = $('div').addClass('wrapper');

  $('.wrapper').append('<ul><li><a></a></li><li><a></a></li><li><a></a></li></ul>');
  var $menu = $('ul').addClass('menu');

  var $buttons = $('li').addClass('buttons');
  var $links = $('a').addClass('links');
  $links.attr('href', '#');
  $('.links').append('Button');
  $('.buttons:first').addClass('first-btn');
  $('.buttons:nth-child(2)').addClass('second-btn');
  $('.buttons:nth-child(3)').addClass('third-btn');

  var $btn1 = $('.first-btn');
  $btn1.on('click', function(){
    $btn1.css('z-index', '20');
    $btn2.css('z-index', '5');
    $btn3.css('z-index', '5');
    $tip1.css('display', 'block');
    $tip2.css('display', 'none');
    $tip3.css('display', 'none');
  });

  var $btn2 = $('.second-btn');
  $btn2.on('click', function(){
    $btn2.css('z-index', '20');
    $btn1.css('z-index', '5');
    $btn3.css('z-index', '5');
    $tip2.css('display', 'block');
    $tip1.css('display', 'none');
    $tip3.css('display', 'none');
  });

  var $btn3 = $('.third-btn');
  $btn3.on('click', function(){
    $btn3.css('z-index', '20');
    $btn1.css('z-index', '5');
    $btn2.css('z-index', '5');
    $tip3.css('display', 'block');
    $tip1.css('display', 'none');
    $tip2.css('display', 'none');
  });

  $('.wrapper').append('<div>');
  var $tip1 = $('div:last').addClass('tip').addClass('tip1');
  $('.tip1').append('<p class="text text1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>');

  $('.wrapper').append('<div>');
  var $tip2 = $('div:last').addClass('tip').addClass('tip2');
  $('.tip2').append('<p class="text text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>');

  $('.wrapper').append('<div>');
  var $tip3 = $('div:last').addClass('tip').addClass('tip3');
  $('.tip3').append('<p class="text text3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>');

});
