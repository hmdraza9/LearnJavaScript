const Animal = {};

Animal.name = "Lion";
Animal.continent = "Asia";
Animal.food = "Meat";
Animal.type = "Hunter";
Animal.species = "Cat";
Animal.age = 25;

const Bird = new Object();

Bird.name = "Eagle";
Bird.continent = "Asia/Africa";
Bird.food = "Meat";
Bird.type = "Hunter";
Bird.species = "Eagle";
Bird.age = 20;

console.log(`Animal: ${JSON.stringify(Animal)}`);

console.log(`Bird: ${JSON.stringify(Bird)}`);


Object.preventExtensions(Animal);
console.log("Object.isExtensible(Animal): "+Object.isExtensible(Animal));

Object.seal(Animal);
console.log("Object.isSealed(Animal): "+Object.isSealed(Animal));

Object.freeze(Animal);
console.log("Object.freeze(Animal): "+Object.isFrozen(Animal));

const Planet = {life: true, color: "Blue", tilted: true, name: "Earth"};

// Planet = {life: false, color: "Brown", tilted: false, name: "Venus"};

console.log(`Planet: ${JSON.stringify(Planet)}`);

Planet.name = "Venus";

console.log(`Planet: ${JSON.stringify(Planet)}`);

Object.preventExtensions(Planet);

Planet.name = "Saturn";