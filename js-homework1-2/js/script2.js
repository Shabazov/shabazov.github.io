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
