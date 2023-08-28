
console.log(pow(5));

// ! Hoisting 
// ! Globally scoped 
// * Named function 

function pow(e){
    console.log(this);
    return e**3
}


// * AVOID hoisting 
const myFunction = function pow(e) {
    return e**3
}

console.log(myFunction(3));