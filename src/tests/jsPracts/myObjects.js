let car = {make:"2001",brand:"Tata",state:"Delhi"};

console.log(car);

car.make="2008";

console.log(car);

car.brand="Ford";

console.log(car);

car.state="Mumbai";

console.log(car);

console.log("Make : ", car["make"]);

console.log("Brand: ", car["brand"]);

console.log("State: ", car["state"]);


let movie = {name:"RHTDM", 
            year: 2019,
            runtime: 240,
            UA: true,
            SNID: null,
            age: undefined
};


console.log(movie);

if(movie.runtime>200)
    movie.UA = false;


console.log(movie);

delete movie.SNID;

console.log(movie);

let advMovie = {name:"JAWAN", 
    year: 2023,
    runtime: 270,
    UA: false,
    cast : {
        leadActor: "SRK",
        leadActress: "Samantha",
        childActed: true,
        _500Cr: true,
        day:"Friday"
    },
    age: undefined
};

console.log(advMovie.year);
console.log(advMovie.age);
console.log(advMovie.cast.leadActress);
console.log(advMovie.cast.leadActor);
console.log(!advMovie.cast._500Cr);
console.log(advMovie.cast.childActed);
console.log(advMovie.cast.day);

let meals = {
    bf: {
        bread: "Bread",
        paste:"Butter",
        drink: "Milk",
        sweet: "Curd Sugar"
    },
    lunch: {
        bread: "Rice",
        paste: "Pickle",
        drink: "Butter Milk",
        sweet: "barfi"
    },
    dinner:{
        bread: "Rice and Roti",
        paste: "mashed potato",
        drink: "Milk",
        sweet: "Chocolate milk"
    },

    bfFood: function(){
        return this.bf.bread+" "+this.bf.paste+" "+ this.bf.drink+" "+this.bf.sweet;
    },

    lunchFood: function(){
        return this.lunch.bread+" "+this.lunch.paste+" "+ this.lunch.drink+" "+this.lunch.sweet;
    },

    dinnerFood: function(){
        return this.dinner.bread+" "+this.dinner.paste+" "+ this.dinner.drink+" "+this.dinner.sweet;
    }
}

console.log("Breakfast: "+meals.bfFood());
console.log("Lunch: "+meals.lunchFood());
console.log("Dinner: "+meals.dinnerFood());

meals.supper = function(){
    return (this.bf.bread+" "+this.lunch.paste+" "+this.dinner.sweet).toUpperCase();
}


console.log("Supper: "+meals.supper());