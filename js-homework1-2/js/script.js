alert('Задача 1');

var myNumber = prompt('введите число');
var myMultiply = prompt('введите степень');

myPow(myNumber, myMultiply);

function myPow(myNumber, myMultiply) {
  var result = 1;
  for(var i = 0; i < myMultiply; i++) {
    result *= myNumber;
  }
  console.log(result);
}
