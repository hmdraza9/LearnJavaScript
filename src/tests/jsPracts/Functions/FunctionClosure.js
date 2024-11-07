

//https://www.w3schools.com/js/js_function_closures.asp
//JavaScript Closures / Function Closures

//https://chatgpt.com/share/672bdcf6-d71c-8010-ac3b-d227501bd10c

function createCounter() {

    console.log("createCounter called!");
    let count =0;

    return function(){
        console.log("inner function called!, on count= "+count);
        count++;
        return count;
    };

}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());


function createSecretHolder(secret){

    return{
        getsecret: function(){return secret;},
        setSecret: function(newSecret){secret = newSecret;}
    };

}

const secretHolder = createSecretHolder("my secret");
console.log(secretHolder.getsecret());
secretHolder.setSecret("my new secret");
console.log(secretHolder.getsecret());


const date = new Date();

console.log(date.getFullYear());
date.setFullYear(date.getFullYear()-3);
console.log(date.getFullYear());

class Car{

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age() {

        const date = new Date();
        return date.getFullYear()-this.year;

    }
}

const car = new Car("Ford", 2019);
console.log("My car is "+car.age()+" years old!");
