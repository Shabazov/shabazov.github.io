var start = document.querySelector('.start');
var pause = document.querySelector('.pause');
var stop = document.querySelector('.stop');
var timer = document.querySelector('.timer');
var time = document.querySelector('.time');

start.addEventListener('click', startCount);
pause.addEventListener('click', pauseCount);
stop.addEventListener('click', stopCount);

var count = 0, timerId, go = false;

function startCount() {
  if (go == false) {
    timerId = setInterval(function() {
      count++;
      var msec = count % 100;
      if (msec < 10) {msec = "0" + msec;}
      var sec = Math.floor(count / 100) % 60;
      if (sec < 10) {sec = "0" + sec;}
      var min = Math.floor(count/6000) % 60;
      if (min < 10) {min = "0" + min;}
      var hours = Math.floor(count/360000) % 24;
      if (hours < 10) {hours = "0" + hours;}
      var string = hours + ":" + min + ":" + sec + ":" + msec;
      timer.innerHTML = string;
    }, 10);
    go=true;
  }
}

function pauseCount() {
  var str = document.querySelector('.timer').innerHTML;
  time.innerHTML = str;
  clearInterval(timerId);
  go = false;
}

function stopCount() {
  time.innerHTML = '';
  clearInterval(timerId);
  go = false;
  count = 0;
  timer.innerHTML = '00:00:00:00';
}
