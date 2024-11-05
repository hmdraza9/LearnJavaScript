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

