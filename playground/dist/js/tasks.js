let user = {
    name: 'Egor',
    surename: 'Shabazov',
    age: 32,
    country: 'Spain',
    isLearning: true,
    doStuff() {
        alert(`${this.name} is doing js tasks`);
    },
};

let salaries = {
    John: 1000,
    Ellen: 1200,
    Egor: 1600,
    Jorge: 900,
};

let room = {
    number: 23,
};

let meetup = {
    title: 'Conference',
    occupiedBy: [{name: 'John'}, {name: 'Alex'}],
    place: room,
};


///////////////////////////////////////////////////////////

let ujson = JSON.stringify(user);



// let meeting = JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key} : ${value}`);
    
//     return (key != '' && value == meetup) ? undefined : value;
// });



function topSalary(obj) {
    let top = 0;
    let topName = null;
    for(let [name, salary] of Object.entries(salaries)) {
        if(top < salary) {
            top = salary;
            topName = name;
        };
    };
    return topName;
};