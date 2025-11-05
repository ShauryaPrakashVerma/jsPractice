// DATA TYPES + TYPE SYSTEM

// data types (Primitive , reference data types)

// Primitives --> (string, number, boolean, null, undefined, symbol, bigInt)
// copy krne par real copy milti hai
// copy value ka update krne par real value doesn't update
let a = 12;
let b = a;
a = a + 2;

// Reference --> (array [], objects {}, functions() )
// copy krne par reference milega parent ka
let c = [1, 2, 3];
let d = a; // changing value of d also changes original 'c'

//---------------------------------------------------------------------------------------------------------------------------------------------

// Strings
// Ways to create string:
// '' --> single quotes
// "" --> double quotes
// `` --> backticks

// 12 -number
// 12.5 -number

// boolean (true,false)

// null (jaan boojh kar koi value nhi di,, ye value hum log dete hain)
// undefined (aapne variable banaya aur use koi value nhi di, then by default jo value mile gi wo hogi undefined,,ye value milti hai)

let g;
console.log(g)   // undefined  (it is similar to garbage value in other languages.)

let h = null;
console.log(h);  // null


//SYMBOL --> primitive data type,
// unique immutable value

let u1 = Symbol("uid");

// bigInt
// Number.MAX_SAFE_INTEGER: 9007199254740991

// if we perform operations on value bigger than this we get errors, so we use bigInt

// defining bigInt
// to make a number big int just add n after it.
let x = 9007199254740991n;
console.log(x + 3n);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

    // dynamic typed
    // means we can change the value of the variables.

    // let a = "hindi";
    // a = 2;

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

    // QUIRKS
    // typeof null -- > output is Object
    // typeof NaN --> 'number'    Why? Js treats it as a "failed number operation" for eg: 2 * "shaurya"

    // Nan == Nan --> false
    // [] + [] --> ""  black string
    // 1=="1"  true
    // 1==="1" false

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

    // type conversion
    // one datatype is automatically converted into another dataype

    // "5" + 1 --> output is "51"
    // "5" - 1 --> output is 4 which is number.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Truthy and Falsy values

    // False : 0, false, "", null, undefined, NaN, document.a;
    // trick to check any number is false or true , in console type !!<whatever_you_want_to_check>

    if (-1) {
    // -1 is a truthy value
    }