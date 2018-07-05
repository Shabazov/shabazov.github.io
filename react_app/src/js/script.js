let slideIndex = 0;

function currentSlide(n) {
  slider(slideIndex = n)
}

function slider() {
  let elements = document.querySelectorAll('.mySlide')
  let arr = Array.from(elements)
  
  for(let i = 0; i < arr.length; i++)
    arr[i].style.display = 'none';

  slideIndex++

  if(slideIndex > arr.length) slideIndex = 1
  
  arr[slideIndex - 1].style.display = 'block'
  // setTimeout(slider, 2000)
}

slider()