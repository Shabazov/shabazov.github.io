'use strict'

$(function() {


  var answers = {
    answr1: 'markup language',
    answr2: 'cascading style sheet',
    answr3: 'programming language'
  };

  var data = {
    question1: 'HTML is:',
    answer11: 'markup language',
    answer12: 'make up language',
    answer13: 'wtf',
    question2: 'CSS is:',
    answer21: 'cascading style sheet',
    answer22: 'wtf',
    answer23: 'huynya',
    question3: 'javascript is:',
    answer31: 'programming language',
    answer32: 'bull shit',
    answer33: 'fancy thing'
  };
// console.log(data);

localStorage.setItem('data', JSON.stringify(data));

var renderedData = JSON.parse(localStorage.getItem('data'));
// console.log(renderedData);

var html = $('#test').html();
// console.log(html);

var content = tmpl(html, renderedData);

$('body').append(content);



$('.submit').on('click', function() {
  var val1 = $('input[name=question1]:checked').val();
  var val2 = $('input[name=question2]:checked').val();
  var val3 = $('input[name=question3]:checked').val();
  // console.log(val1, val2, val3);

  if(val1 == answers.answr1){
    if(val2 == answers.answr2){
      if(val3 == answers.answr3) {
        alert('passed');
    } else {
        alert('inncorrect');
    }
  } else {
      alert('inncorrect');
  };

  } else {
    alert('inncorrect');
  };


});

});
