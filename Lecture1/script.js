console.log("hiiiiiiiii");

// methods to create a varibale
// var
// let
// const


var a;  //declaration
var name = 12;
    //exists throughout the whole program.
    // adds itself to the "window"
    // "function scoped" hota hai variable
    // firse declare kar skte hain same name se, error nhi aaega.

//problem no 1
function f() {
    if (true) {
        var z = 12;  // functional scope i.e scope not limited to if , accessible anywhere inside the function but not outside it
        }
}
    
var a = 13;   // global scope variable i.e. accessible anywhere in the program 

let b; // declaration
    // better than var, preferred to use.
    // block scoped hota hai variable

let c = 2; //initialization means giving the first value.


const d = 12;
    // const a;   not possible
// value can't be changed
    
// -------------------------------------------------------------------------------------------------------------------------------------------

// SCOPE (global, block, functional)

var p = 12;  //global scope

{
    var q = 121; // does not rescpect the block since it is functional scoped, i.e. accessible outside this block.
}


{
    let s = 12;  // let not accessible outside the block since it is block scoped.
}

function f() {
    if (true) {
        let t = 12;  // let accessible only inside the if block
        }
}


// ------------------------------------------------------------------------------------------------------------------------------------------------

// Reassignment , redeclaration

// reassignment
var u = 32;  // var allows redeclaration
u = 31;

let v = 33; // let does not allow redeclaration
v = 34;

// --------------------------------------------------------------------------------------------------------------------------------------------------

// Temporal Dead Zone (TDZ) is for let and const (except for var)
    // console.log(x);  // gives error : Cannot access 'x' before initialization.
                    // means it has knowledge about that x is available after in the program
                    // if x was not available anwhere in the future then it would have given the error: "x" is not defined.

    // let x = 12;  // temporal dead zone of x is from line no 72 to line no 75

// -------------------------------------------------------------------------------------------------------------------------

// Hoisting --> ek variable ko jab js me banate hain to wo variable do hisso me toot jaata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jaata hai.
// in all three (var --> undefined, let --> refernceError, const -->referenceError)
console.log(y)   //output

var y = 12;

// the above snippet looks something like this
//   var y = undefined;
//   console.log(y)
//   y = 12;



// console.log(m)

// let m = 10;  //gives error : Cannot access 'm' before initialization
    // NOTE: it is written initialization not declaration

    //  above code snippet looks like this :-
    // let m;
    // console.log(m)
    // m = 10;   means console.log is in the Temporal dead zone of let m
