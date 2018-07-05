$(function() {

  $('.carousel').carousel();

  var template = $('#test').html();
  var data = {
    name: 'Iegor Shabazov',
    education: 'GoIT',
    reasons: ["find a good job", "gain new knowledge"],
    telephone: '717701079'
  };

  var content = tmpl(template, data);

  $('body').append(content);

});
