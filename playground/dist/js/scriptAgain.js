function pali(str) {
    let regEx = /[\W_]/g;

    let replace = str.toLowerCase().replace(regEx, '');
    let result = replace.split('').reverse().join('');

    if(result === str) {
        console.log(`${result} is a palindrome`);
    } else {
        console.log(`${str} is not a palindrome`);
        
    }
    
};

// pali('aha');


//////////////////////////////////////////////////////////////

function User(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log('hello');
        
    };
};

// let guy = new User('eg', 32);
// console.log(guy);

//////////////////////////////////////////////////////////////

let arr = [1,2,3,4,5,6,7,8,9];

let users = [
    {id: 1, name: 'John', age: 30,},
    {id: 2, name: 'Jack', age: 29,},
    {id: 3, name: 'Sparrow', age: 40,},
];

function log(arr) {
    for(let key of arr) {
        console.log(key.name);
    };
};

// log(users);

arr[Math.floor(arr.length - 1) / 2] = `Rock'n'Roll`;
// console.log(arr);

// let conctArr = [1,2,3,4,];

// let user = {
//     0: 'Something',
//     // name: 'Vasya',
//     // age: 30,
//     [Symbol.isConcatSpreadable]: true,
//     length: 1,
// };

// let newArr = conctArr.concat(user);
// console.log(newArr);

let usario = users.find(item => item.name == 'John');
// console.log(usario);

let usarios = users.filter(item => item.id < 3);
// console.log(usarios);

let maped = arr.map(item => item *= 2);
// console.log(maped);
arr[Math.floor(arr.length - 1) / 2] = 5;
// console.log(arr);

let unsorted = [1,5,3,6,9,10,15];

// let sorted = unsorted.sort((a, b) => a - b);
// console.log(sorted);

// let reduced = sorted.reduce((sum, current) => sum + current);
// console.log(reduced);

// unsorted.forEach((item, index, unsorted) => {
//     console.log(`${item} is at index ${index} in an unsorted`);
// });

// unsorted.forEach(item => console.log(item *= 2));

// console.log(unsorted);

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1))
        .join('');
};

// console.log(camelize('Background-color-attachment'));

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
};

function filterInPlace(arr, a, b) {
    for(let j = 0; j < arr.length; j++) {
        let value = arr[j];
        if(value < a || value > b) {
        arr.splice(j, 1);
        j--;
        };
    };
};

// console.log(filterRange(unsorted, 5, 10));
// filterInPlace(unsorted, 5, 10);
// console.log(unsorted);

let arr1 = ['html', 'js', 'css', 'react'];

function copySorted(arr) {
    return arr.slice().sort();
};

let arr2 = copySorted(arr1);
// console.log(arr2);
// console.log(arr1);

let johnny = {name: 'John', sureName: 'Paul', age: 30};
let casey = {name: 'Casey', sureName: 'Ribeck', age: 28};
let claire = {name: 'Claire',sureName: 'Benefit',  age: 32};

let people = [johnny, casey, claire];
// let names = people.map(item => item.name);
// console.log(names);

let mappedPeople = people.map(user => ({
    fullName: `${user.name} ${user.sureName}`,
    age: people.age,
}));

// console.log(mappedPeople[1].fullName);

function sortArr(arr) {
    arr.sort((a, b) => a.name > b.name);
};

sortArr(people);

// console.log(people[0].name);

function unique(arr) {
    let result = [];

    for(let key of arr) {
        if(!result.includes(key))
        result.push(key);
    };
    return result;
};

let arr3 = ['hey', 'hey', 'how', 'how', 'are', 'are', 'you', 'you',];

// console.log(unique(arr3));

function filt(arr, a, b) {

    return result = arr.filter(item => (a <= item && item <= b));
};

function sorted(arr) {
    return arr.sort((a, b) => a - b);
};

function camel(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word[0].toLowerCase : word[0].toUpperCase() + word.slice(1))
        .join('');
};














