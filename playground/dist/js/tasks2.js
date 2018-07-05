'use strict';

function Human(name, birth, sex) {
    this.name = name;
    this.birth = birth;
    this.sex = sex;
    Object.defineProperty(this, 'age', {
        get() {
            let today = new Date().getFullYear();
            return today - this.birth.getFullYear();
        }
    });
};

let mySelf = {
    name: 'Egor',
    born: new Date('1985, 11, 13'),
    __proto__: Human,
};

let mySelf2 = new Human('Egor', new Date(1985, 10, 13), 'male');

// console.log(mySelf.birth);
// console.log(mySelf.age);

////////////////////////////////////////////////////////////////////////////////////////////////////

let testObj = {};

testObj.title = 'test';
testObj[1] = 'numeric';
testObj['other prop'] = 'string';
testObj.__proto__ = mySelf;

// for(let prop of Object.keys(testObj)) {
//     console.log(`key: ${prop}`);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////

// function Clock({template}) {
//     this._template = template;
// };

// Clock.prototype._render = function() {
//     let date = new Date();

// let hours = date.getHours();
// if(hours < 10) hours = '0' + hours;

// let mins = date.getMinutes();
// if(mins < 10) mins = '0' + mins;

// let sec = date.getSeconds();
// if(sec < 10) sec = '0' + sec;

// let output = this._template
//     .replace('h', hours)
//     .replace('m', mins)
//     .replace('s', sec);

//     console.log(output);
// };

// Clock.prototype.start = function() {
//     this._render();
//     this._timer = setInterval(() => this._render(), 1000);
// };

// Clock.prototype.stop = function() {
//     clearInterval(this._timer);
// }


// clock.start();
// clock.stop();

////////////////////////////////////////////////////////////////////////////////////////////


class User {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if(name.length < 4) {
            console.log('name is too short');
            return;
        }
        this._name = name;
    }

    sayHi() {
        alert(`Hi! My name is ${this.name}`)
    }
};

let admin = new User('jeck');

// console.log(admin.name);

///////////////////console.log('name is too short');console.log('name is too short');console.log('name is too short');


class Clock {

    constructor({ template }) {
        this._template = template
    }

    _render() {
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;

        let sec = date.getSeconds();
        if(sec < 10) sec = '0' + sec;

        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', sec);

        console.log(output);
        }

        start() {
            this._render();
            this._timer = setInterval(() => this._render(), 1000)
        }

        stop() {
            // setTimeout(clearInterval(this._timer), 5000)
            clearInterval(this._timer)
        }
    };

    let clock = new Clock({template: 'h: m: s:'});
    clock.start();
    clock.stop();
    // clearInterval(clock.stop(), 5000)
    // setTimeout(clock.stop(), 3000);