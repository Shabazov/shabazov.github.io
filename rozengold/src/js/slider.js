let slideIndex = 0;

function currentSlide(n) {
  slider(slideIndex = n)
}

function slider() {
  let elements = document.querySelectorAll('.mySlide')
  // let buttons = document.querySelectorAll('.controls-button')
  let arr = Array.from(elements)
  
  for(let i = 0; i < arr.length; i++)
    arr[i].style.display = 'none';

  // for (i = 0; i < buttons.length; i++) {
  //   buttons[i].className = buttons[i].className.replace(" controls-button", "");
  // }

  slideIndex++

  if(slideIndex > arr.length) slideIndex = 1
  
  arr[slideIndex - 1].style.display = 'flex'
  // buttons[slideIndex - 1].className += " controls-button-rojo";
  setTimeout(slider, 3000)
}

slider()