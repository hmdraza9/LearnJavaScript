//https://www.w3schools.com/js/js_object_constructors.asp

function Person(first, last, age, eye){
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
    this.city = "NDLS";
}


const father = new Person("Abd", "Sha", 77, "black");
const mother = new Person("Kur", "Kha", 66, "grey");
const wife = new Person("Sab", "Beg", 27, "brown");
const daughter = new Person("Noo", "Fati", 4, "black");


Person.prototype.birthP = "Bihar";

console.log(father);
console.log(father.first);

console.log(father.birthP);

console.log("Field level change method::");

mother.changeName = function (name){

    this.last = name;

};

console.log(mother);

mother.changeName("Buddh");

console.log(mother);


console.log("Generic/Prototype change method::");

Person.prototype.changeName = function(name){

this.last = name;

}

console.log(father);

father.changeName("HeMan");

console.log(father);

console.log(daughter);

daughter.changeName("Afiya");

console.log(daughter);