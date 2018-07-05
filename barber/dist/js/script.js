'use strict'

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

function open() {
  modal.style.display = document.querySelector('.modal') !== 'block' ?
    'block' : 'none';
}

function close() {
  modal.style.display = 'none';
}

let inputDate = document.querySelector('.date');
inputDate.setAttribute('value', `${year}.${month}.${day}`);

let inputTime = document.querySelector('.time');
inputTime.setAttribute('value', `${hours}:${minutes}`);

let ya = document.querySelector('.button');
let cita = document.querySelector('.pedir');
let modal = document.querySelector('.modal');



ya.addEventListener('click', close);
cita.addEventListener('click', open);


// let mod = document.getElementsByClassName('myModal');
// let modal = document.getElementsByClassName('modal')[0];
// let times = document.getElementsByClassName('close')[0];

// function open(event) {
//     event.preventDefault();
//     modal.style.display = 'block';
//     console.log(this);
    
// };

// function close(event) {
//     if(event.target == times) modal.style.display = 'none';
// };

// mod[0].addEventListener('click', open, false);

// window.addEventListener('click', close, false);




