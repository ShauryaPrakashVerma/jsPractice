// -----------------------------------
// SECTION 1 — Loops & Conditionals
// -----------------------------------
// 🟢 EASY

// Write a program to check if a number is even or odd using if-else.
// let number = +prompt("Enter the number:");
// if (number % 2 !== 0) {
//     console.log("Odd");
// }
// else {
//     console.log("Even");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Use a switch statement to print the name of the day based on a number (1 = Monday, ... 7 = Sunday).
// let number = prompt("Enter a number betwen 1 to 7");
// switch (number) {
//   case "1":
//     console.log("monday");
//     break;
//   case "2":
//     console.log("tuesday");
//     break;
//   case "3":
//     console.log("wednesday");
//     break;
//   case "4":
//     console.log("thursday");
//     break;
//   case "5":
//     console.log("friday");
//     break;
//   case "6":
//     console.log("saturday");
//     break;
//   case "7":
//     console.log("sunday");
//     break;
//   default:
//     console.log("Please enter a number between 1 to 7");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Print numbers from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Print numbers from 1 to 10 using a while loop.
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
//     console.log("hi");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Use a do...while loop to print numbers from 5 to 1.
// let i = 5;
// do {
//     console.log(i);
//     i--;
// }while(i>=1)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Use a forEach loop to print each element of [10, 20, 30, 40].
// let array1 = [10, 20, 30, 40];
// array1.forEach(function (val) {
//   console.log(val);
// });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Use for-of to iterate over a string "JavaScript" and print each character.
// for (let char of "JavaScript") {
//     console.log(char);
// }

// // if we want to write same with for in loop
// for (let char in "JavaScript") {
//     console.log(char, "JavaScript"[char]);
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🟡 MEDIUM

// Use for-in to print all keys of an object {name: "A", age: 20, city: "Delhi"}.
// let obj = {
//     name: "A",
//     age: 20,
//     city: "Delhi"
// };

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a program to compute factorial using a loop.
// let num = Number(prompt("Enter any number"));
// let pro = 1;
// for (let i = 1; i <= num; i++){
//     pro = pro * i;
// }
// console.log(`Factorial of ${num} is: ${pro}`);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a program using loops to print a multiplication table of any number.
// let num = Number(prompt("Enter any number"));
// for (let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a program that uses continue to skip numbers divisible by 3 from 1–20.
// for (let i = 1; i <= 20; i++){
//     if (i % 3 == 0) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a program that uses break to stop the loop when the number hits 13.
// for (let i = 1;i<20; i++){
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create a recursive function to calculate the sum of digits of a number.
function recursiveSum(num) {
    
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Create a recursive function to generate Fibonacci sequence up to n terms.

// 🔴 HARD

// Convert a nested loop solution (printing matrix) into a recursion-only solution.

// Write a program to simulate a mini calculator using switch (+, -, *, /).

// Write a recursive function to flatten a deeply nested array:

// [1, [2, [3, [4]]]] → [1,2,3,4]

// Write a program to print the first 20 prime numbers using a loop.

// Write a function that prints a pyramid pattern using loops:

//     *
//    ***
//   *****

// -------------------------------
// SECTION 2 — Functions
// -------------------------------
// 🟢 EASY

// Create a function add(a,b) that returns the sum.

// Create a function with default parameter: greet(name="Guest").

// Create a function that returns the square of a number using arrow function.

// Write an IIFE that prints "IIFE Executed".

// 🟡 MEDIUM

// Write a function that takes rest parameters and returns their total sum.

// Write a function demonstrating destructured parameters:

// function printUser({name, age})

// Create a higher-order function operate(a,b,callback) where:

// callback = add or subtract

// Explain difference between:

// parameters vs arguments

// function hoisting vs variable hoisting

// Write a nested function and demonstrate how the inner function uses outer variables (scope chain).

// Write a function that returns another function (closure) to add a fixed number:

// 🔴 HARD

// Write a program showing how hoisting works differently for:

// var

// let

// const

// function declarations

// arrow functions

// Create a pure function and an impure function for comparison.

// Write a function that mimics .map() functionality using callbacks.

// Implement custom debounce(fn, delay) function.

// Implement custom throttle(fn, delay) function.

// Write a closure-based counter with methods:

// increment

// decrement

// reset

// getValue

// for (let [i, char] of [...str].entries()) {}
