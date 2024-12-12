//bind:

const Person = {
    name: "Ashok",
    greet: function(greeting){
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

const greetPerson = Person.greet.bind(Person);
greetPerson("Hi");


//callback
function calculate(a, b, callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function square(a){
    return a*a;
}

console.log(calculate(4,2, multiply));
console.log(calculate(4,2, add));
console.log(calculate(4,3, square));


//apply
function introduce(langauge, country){
    return "My name is "+this.name+" and I live in "+country+" and I speak "+langauge;
}

const person = {name:"Ashok"};

const intro = introduce.apply(person, ["Hindi","India"]);

console.log(intro);