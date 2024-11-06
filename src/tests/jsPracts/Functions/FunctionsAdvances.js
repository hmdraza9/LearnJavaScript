function myFunc(x=3, y=2){
    return x + y;
}

console.log(myFunc(1));
console.log(myFunc(3));
console.log(myFunc());


function sumNum(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }

    return sum;
}

console.log(`Sum of numbers: ${sumNum(1,2,3,1,2,3,1,2,3)}`);


function findMax(){
    let max = -Infinity;
    for(let i=0; i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(90,1,2,12,3,19,4));

//https://www.w3schools.com/js/js_function_invocation.asp

const packet = {

    type: "Food",
    weight: 2,
    shape: "cuboid",
    color: "brown",
    fragile: false,
    recyclable: true,
    fullDetail: function(){
        return this.type+", "+this.weight+"kg, "+this.shape+", "+this.color+", "+this.fragile+", "+this.recyclable;
        // return packet===this;
    }
}

console.log(`Package  detail: ${packet.fullDetail()}`);

//https://www.w3schools.com/js/js_function_call.asp

const person = {
    fullName : function(){
        return this.salutation + " - "+ this.fname + " "+this.lname;
    }
}

const person1 = {
    salutation: "Person 1",
    fname : "John",
    lname : "Doe"
}

const person2 = {
    salutation: "Person 2",
    fname : "Harry",
    lname : "Potter"
}

console.log(person.fullName.call(person2));



const place = {
    fullAddress : function(city, state){
        return this.houseNum + " - "+ this.fname + " "+this.lname+", "+city+", "+state;
    }
}

const place1 = {
    houseNum: "111",
    fname : "Will",
    lname : "Smith"
}

const place2 = {
    houseNum: "222",
    fname : "Ron",
    lname : "Weasely"
}

console.log(place.fullAddress.call(place1, "New Delhi", "Delhi"));

const newPerson = {
    fname : "Amit",
    lname : "Kumar",
    fullname : function(){
        return this.fname+ " " +this.lname;
    }
}

const member = {
    fname : "Nelson",
    lname : "Mandela"
}

let FullName = newPerson.fullname.bind(member);

console.log(FullName());