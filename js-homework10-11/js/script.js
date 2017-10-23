$(function() {

  $('.carousel').carousel();

  var template = $('#test').html();
  var data = {
    name: 'Iegor Shabazov',
    education: 'GoIT',
    reasons: ["find a good job", "gain new knowledge"],
    telephone: '717701079'
  };

  // var html = $('#test').html();
  // var data = {
  //   title: 'Hello world'
  // };
  //
  // var content = tmpl(html, data);
  // $('body').append(content);

  var content = tmpl(template, data);

  $('body').append(content);

});
