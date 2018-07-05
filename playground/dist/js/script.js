

//////////////////////////////////////////////// F U N C T I O N  O D D  N U M B E R S

// for(let i = 0; i < 15; i++)
//   if(i % 2 == 0) console.log(`number ${i} is odd`);

//////////////////////////////////////////////// F U N C T I O N  D I C T I O N A R Y


let words = [];
let btn = document.querySelector('button');
btn.addEventListener('click', function(){
  let word = prompt('enter', '');
  if(!word) {
    alert('no words entered');
  } else {
    let uppWord = word[0].toUpperCase() + word.slice(1);
    words.push(uppWord);
    console.log(words);
    
  };
});

///////////////////////////////////////////////////// F U N C T I O N  P O W E R



function poww(c, d) {
  let result = c;

  for(j = 1; j < d; j++) {
    result *= c
  };
  return result
};

let poo = document.querySelector('.power');
poo.addEventListener('click', function(){
  let ppwr = prompt('enter 1');
  let numb = prompt('enter 2');
  console.log(poww(ppwr, numb));
});



/////////////////////////////////////////////////////// O B J E C T  A S S I G N

let user = {
  name: 'Egor',
  'second name': 'Shabazov',
  age: 32,
  job: 'web developer',
  car: 'BMW',
};

let habbits = {
  toDrive: true,
  toSweam: true,
  toCode: true,
};

Object.assign(user, habbits);

// for (key in user) {
//   console.log(key + ': ' + user[key]);
// };

////////////////////////////////////////////////////////// O B J E C T  G A M E S

let friends = {
  friend1: 'artem',
  friend2: 'vova',
  friend3: 'andrey',
  friend4: 'dasha',
};

function findAFriend(str) {
  for(key in friends) {
    if(friends[key] == str) {
      console.log('you have a friend ' + friends[key]);
      break;
    } else {
      console.log('no such a friend');
    };
  };
};



let amigo = document.querySelector('.friend');
amigo.addEventListener('click', function(){
  let req = prompt('who do u looking for', '');
  
  if(req.length < 3 || req == NaN) {
    console.log('wrong name');
  } else if (req.length > 3 || req != NaN) {
    findAFriend(req);
  };
});

///////////////////////////////////////////////////////////

// let obj = {
//   name: 'Egor',
//   age: 32,
// };

// let kkey = prompt('find a key', '');

// alert(obj[kkey]);

//////////////////////////////////////////////////////////// P A L I N D R O M E

function palindroms() {

  let req = prompt('enter a word or phrase:', '');
  let re = /[\W_]/g;

  let lowCase = req.toLowerCase().replace(re, '');
  let reverse = lowCase.split('').reverse().join('');

  if(reverse === lowCase) {
    console.log(`${req} is a palindrome`);
  } else {
    console.log(`${req} is not a palindrome`)
  };
};

// A man, a plan, a canal.Panama

// palindroms();

/////////////////////////////////////////////////////////////  T H I S

let calculator = {
  read() {
    this.oper1 = +prompt('operand #1:', '');
    this.oper2 = +prompt('operand #2:', '');
    // console.log(this);
  },
  sum() {
    return this.oper1 + this.oper2;
  },
  mult() {
    return this.oper1 * this.oper2;
  },
};

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  show() {
    console.log(this.step);
  },
};

/////////////////////////////////////////////////////////////  ? ? ?

// let conf = confirm('older then 18?');

// let result = (conf) ? alert('come on in!') : alert('grow up a little bit!');


///////////////////////////////////////////////////////////// S Y M B O L
let car = Symbol('id');

let user2 = {
  name: 'Egor',
  age: 32,
  [car]: 'Audi',
};

// user2[car] = 'BMW';
// console.log( user2[car] );
// user2[car] = 'Audi';
// console.log(user2[car]);

// for(key in user2) {
//   console.log(key, user2[key]);
// };

// console.log('direct access ' + user2[car]);

// let id = Symbol.for('id');
// console.log( id.toString() );
// console.log( Symbol.keyFor(id) );

// let idAgain = Symbol.for('idAgain');
// console.log( idAgain.toString() );
// console.log( Symbol.keyFor(idAgain) );

/////////////////////////////////////////////////////// C O N S T R U C T O R S

// function Accumulator(initValue) {
//   this.sum = initValue;
//   this.read = function() {
//     // let sum = initValue;
//     let req = +prompt('enter a number', 0);
//     this.sum += req;
//   };
// };
// // let accumulator = new Accumulator(1);
// // accumulator.read();
// // console.log( accumulator.sum );

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.saySome = function() {
//     console.log(`My name is ${this.name}`);
//   };
// };

// let egor = new User('Egor', 32);
// console.log(egor);

// let dasha = new User('Dasha', 1);
// dasha.saySome = function() {
//   console.log(`Dasha says Myau`);
// };

/////////////////////////////////////////////////////////// T O  U P P E R  C A S E

function upper(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr
};

// console.log(upper('john'));


/////////////////////////////////////////////////////////// C H E C K  F O R  S P A M

function spamCheck(str) {
  let lowCase = str.toLowerCase();
  return lowCase.includes('viagra') || lowCase.includes('xxx');
};

// console.log(spamCheck('viagra is power'));
// console.log(spamCheck('innocent bunny'));
// console.log(spamCheck('watch xxx movie'));

//////////////////////////////////////////////////////////// T R U N C A T E

function truncate(str, maxLength) {

  return (str.length > maxLength) ?
          str.slice(0, -1) + '...' :
          str;
};

// console.log(truncate('atata atata tratata', 10));

/////////////////////////////////////////////////////////////