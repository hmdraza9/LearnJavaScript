//https://www.w3schools.com/js/js_class_intro.asp
class Cars {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {

        const date = new Date();
        return date.getFullYear() - this.year;

    }
}

const car = new Cars("Ford", 2019);
console.log("My car is " + car.age() + " years old!");

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have " + this.carname;
    }
}


class Model extends Car {

    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return super.present() + ", it is a " + this.model + " model";
    }
}

const model = new Model("Land Cruiser", "TATA");

console.log(model.present());

console.log(model.show());

//https://www.w3schools.com/js/js_class_inheritance.asp

class Ccar {

    constructor(brand) {
        this._carname = brand;
    }

    get carname() {
        return this._carname;
    }

    set carname(x) {
        this._carname = x;
    }

}

const ccar = new Ccar("Alto");
console.log(ccar.carname);

