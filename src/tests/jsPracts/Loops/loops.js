var cars = ["Tata", "Tesla", "Toyota"]

cars.forEach(car => {
    console.log(car)
})

console.log("****************")

for(var i=0;i<cars.length;i++){
    console.log(cars[i])
}

console.log("****************")

for(let car of cars){
    console.log(car)
}