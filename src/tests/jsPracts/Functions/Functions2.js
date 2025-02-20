function callMe(){
    console.log("Function called")
}

callMe()



saveContact("John") //this ok
// anonymFunc()        //this not ok


function saveContact(name){
    console.log(`Contact saved with name: ${name}`)
}

saveContact("Nicks")


var anonymFunc = function() {
    console.log("I am anonymous function1")
}

anonymFunc()

const ss=123

var anonymFunc2 = (ss) => { //ES3 function syntax || arrow function
    this.ss = ss+12
    console.log(`Printing variable using this keyword: ${this.ss}`)
    console.log(`Printing variable using this keyword: ${ss}`)
    console.log("I am anonymous function2")
}

anonymFunc2(ss)


var anonymFunc3 = () => { //ES3 function syntax || arrow function
    this.ss = ss + 23
    console.log(this.ss)
    // console.log("I am anonymous function3 with return")
    return "I am anonymous function3 with return"
}

console.log(anonymFunc3())