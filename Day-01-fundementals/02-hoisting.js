// console.log(user);

// sayHi();

// let dog = "max"
// var user = {
//     username : "John",
//     age : 41
// }


// console.log(`Hi ${dog}`);

// var x

// function sayHi(){
//     console.log("Hi there!");
//     x = 3
// }

// - HOW Interpeter / Browser Works ! 

// 1- Create namespaces : objects for JS files
// 2- Hoisting : Variables and Functions
// 3- Interpolation and Calculations
// 4- Conver everthing to string
// 5- Run it
// ! JIT : Just in Time Compilation 


var needle = "haystack"

test();
function test(){
    var needle = "magnet";
    console.log(needle);
}
var needle
function test(){
    var needle
    needle= "magnet"
    console.log(needle);
}
needle = "haystack"