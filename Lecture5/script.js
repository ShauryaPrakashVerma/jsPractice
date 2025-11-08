// FUNCTIONS

// Syntax:
// Function Declaration
function name() {
    
}

// Function Expression
let fname = function () {
    
}

// Fat Arrow fucntions
let fnc = () => {
    
};
fnc();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

function dance(name) {
    console.log(`${name} is dancing.`)
}
dance("horse");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 
function add(v1, v2) {
    console.log(v1, v2);
    console.log(v1+v2);
}
add();
add(1,);

// Default parameters
function add(v1 = 1, v2 = 3) {
    console.log(v1, v2);
}
add();


// rest operator / Spread operator
// if arguments are too many in munbers then the numbers of argumnets should also be the same, to avoid this we need to use rest operator
// agar ... function ke paramter space me lage to wo rest operator hai
function abcd(...val) {
    console.log(val);
    console.log(...val)
}
abcd(1, 2, 3, 4, 5)



function efgh(a,b,...val) {
    console.log(a,b,val)
}
efgh(1,2,3,4,5)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// First class functions / First class citizens
// functions can be treated as values

    // function abcd(val)
    // {
    //     val();
    // }

    // abcd(function () { console.log("hey"); });  //just remember you can't give funnction's name here

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Higher order functions (HOF)
// function that returns a function or accepts a function in its parameter.
function pqrst(val) {
    return function () { };
}
pqrst(function () { })



function uvwx() {
    return function () {
        console.log("hello");
    }
}
uvwx()()  //first bracket to run the uvwx() and the other to run the function returned by it i.e. console.log("hello")

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Pure v/s Impure Functions

//pure --> aisa function jo baahar ki value ko na badle vo pure function
//impure --> aisa function jo baahar ki value ko na badle vo impure functions

let aa = 12;

// pure function
function shaurya() {
    console.log("shaurya");
}

//  impure function
function shaurya12() {
    a++;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// closures --> the functions which returns another function, and the returning function uses a variable of the parent function.

function abcf() {
    let a = 12;
    return function () {
        console.log(a)
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Lexical Scoping

function a1() {
    let a = 23;
    function defg() {
        let b = 34;
        function ghij() {
            let c = 35;
        }
    }
}   // b is not accessible in a1() but a is accessible in defg().

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// IIFE (immediately invoked functional expression)
(function () {
    
})();   // function name is not given. it is invoked immediately after its creation.

// we generally use IIFE to create private varibles. For e.g.:
(function () {
    let score = 0;  // this score is not publically accessible. to make this accessible we make getters.

    return {
        getScore: function () { 
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        }
    }
}) 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Hoisting

// hoisting works in function statements as shown below. means this function will work normally even if it is called before its creation. 
justchill();

function justchill(){
    console.log("heyhey");
}

// hoisting does not work in functional expressions, meaning if you store it in a varibale it will not work.

    // doesntwork();

    // let doesntwork = function(){
    //     console.log("hello");
// }
    
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// pass a function into another function and then execute it.
function abcd(val) {
    val();
}

abcd(function () {
    console.log("hello");
})

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Write a BMI calclulator (Body Mass Index)

function BMI(weight, height) {
    return weight / (height * height);
}

console.log(Math.fround(BMI(69, 1.7)));

// toFixed() is for formatting numbers for display by specifying a fixed number of decimal places, and it returns a string.

// Math.fround() is for solving floating-point precision issues by rounding a number to the nearest 32-bit single-precision floating-point value, and it returns a number.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

