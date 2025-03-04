export function multiplyNums(a, b) {
    return a * b;
}


export function divide(a, b){
    if(a>0&&b>0) return a/b
    else{
        console.log(`Either of the number is zero, a=${a}, b=${b}`)
        return 0
    }
}

// export class CustomerDetails{
class CustomerDetails{
    
    printFirstname(firstname){
        console.log(firstname)
    }

    
    printLastname(lastname){
        console.log(lastname)
    }

}

export const cDetailObj = new CustomerDetails()// either write export to class name or its object only