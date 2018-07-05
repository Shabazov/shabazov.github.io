

function palindrome(str) {
    let regEx = /[\W_]/g;

    let replaced = str.replace(regEx, '');

    let rev = replaced.split('').reverse().join('');

    (str == rev) ?
        console.log(`${str} is a palindrome`) :
        console.log('it is not a palindrome');
        
}

////////////////////////////////////////////// C A M E L I Z E

function camelize(str) {
    return str.split('-')
            .map((word, index) => index == 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1))
            .join('');
}

/////////////////////////////////////////////// F I L T E R

function filerRange(arr, a, b) {

    let arr2 = arr.slice();
    return arr2.filter(item => (a <= item && item <= b))
}

let unsorted = [1,5,3,6,9,10,15, 15, 15, 15];

/////////////////////////////////////////////// S E T

function unique(arr) {
    return Array.from(new Set(arr));
}

// console.log(unique(unsorted));
// console.log(unsorted);

/////////////////////////////////////////////// A R B I T R A R Y   S A L A R Y


function arb(obj) {
    let sum = 0;
    for(let salary of Object.values(obj)) {
        sum += salary;
    };
    return sum;
}
// console.log(arb(salaries));

////////////////////////////////////////////// S P A M 

function chSpam(str) {
    let low = str.toLowerCase();

    if(low.includes('viagra') || low.includes('xxx')) {
        console.log('spam');
    } else console.log('no spam');
}

/////////////////////////////////////////////// C A L C U L A T O R

let calc = {
    read() {
        this.op1 = +prompt('enter ', 0);
        this.op2 = +prompt('enter again ', 0);
    },
    sum() {
        return this.op1 + this.op2;
    },
    mult() {
        return this.op1 * this.op2;
    },
};

/////////////////////////////////////////////////  W E A K   S E T

let messages = [
    {message: 'hello', from: 'John'},
    {message: 'que tal', from: 'Jenny'},
    {message: 'myauu', from: 'Dasha'},
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[2]);

messages.shift();
// console.log(readMessages);

///////////////////////////////////////////////// M A P  /  S E T

let mapp = new Map( [ [1, '1'], [2, '2'] ] );

mapp.set('name', 'John');
mapp.set('age', '30');
mapp.set('isHuman', true);

// console.log(mapp);

// console.log(mapp.get('isHuman'));
// console.log(mapp.has('age'));
// console.log(mapp.size);

let mmap = new Map(Object.entries(salaries));

// console.log(mmap);

///////

let sett = new Set();

sett.add('1');
sett.add(1);
sett.add(false);

// console.log(sett);

/////////////////////////////////////// D I S T R U C T U R I N G


let {name, age, isAdmin = false} = user;

// console.log(name, age, isAdmin);

function topSalary(obj) {
    let max = 0;
    let topName = null;

    for(let [name, salary] of Object.entries(obj)) {
        if(max < salary) {
            max = salary;
            topName = name;
        };
    };
    return topName;
};

// console.log(topSalary(salaries));





