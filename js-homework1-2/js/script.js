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

alert('Задача 2');

var myArray = [];

for (var i = 0; i < 5; i++) {
  myArray[myArray.length] = prompt('Enter a name');
}

console.log(myArray);

var userName = prompt('Enter a username');

for(var i = 0; i < myArray.length; i++) {
  if(userName !== myArray[i]) {
    alert('Ошибка');
    break;
  } else {
    alert('Вы успешно вошли ' + userName);
    break;
  }
}
