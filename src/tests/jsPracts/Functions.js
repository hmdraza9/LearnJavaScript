function add(n1, n2) {
    return n1 + n2;
}

console.log(`Addition: ${add(2, 4)}, should print 6`);

function multiply(n1, n2) {
    return n1 * n2;
}

console.log(`Multiplication: ${multiply(2, 4)}, should print 8`);

function tempConversion(str){

    let temp = str.substring(0,str.length-1);
    let unit = str.substring(str.length-1,str.length);
    let finalTempString = "";

    if(unit=="K"){
        console.log("Converting K ==> C");
        if(temp<0){
            console.log("Can't convert, as Temp is less than 0 degree Kelvin");
        }

         temp = temp-273;
         unit = "C";
         console.log(`From K to C: ${temp}${unit}`);
    }

    if(unit=="F"){
        console.log("Converting F ==> C");
         temp = (temp - 32) * 5 / 9;
         unit = "C";

         finalTempString = temp.toString().substring(0, temp.toString().indexOf('.')+3)+""+unit;
    }
    else if(unit=="C"){
        console.log("Converting C ==> F");
         temp = (temp * 9 / 5) + 32;
         unit = "F";

         finalTempString = temp.toString().substring(0, temp.toString().indexOf('.')+3)+""+unit;
    }
    
    else if(unit!="F"&&unit!="C"){
        temp = 0;
        unit = 0;
        console.log("Unknown temperature format");
    }

    return finalTempString;

}

console.log(tempConversion("3F"));
console.log(tempConversion("33C"));
console.log(tempConversion("38D"));
console.log(tempConversion("38K"));

let str = "123t";

console.log(str.substring(str.length-1,str.length)=="s");
