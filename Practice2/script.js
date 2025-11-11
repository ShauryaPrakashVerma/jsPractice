// Question 8
// Print multiplication table of 5

for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 9
// check how many between 1 and 15 are greater than 8
let count = 0;
for (let j = 1; j < 16; j++){
    if (j > 8)
        count++;
}
console.log(count);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 10
// ask user password and print access status

let pass = prompt("Enter the password: ");

if (pass === "12345") {
    console.log("Access granted");
}
else if (pass.trim() === "")  {
    console.log("sahi se kariye");
}
else if (pass === null) {
    console.error("empty");
}
else {
    console.log("Access denied");
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 11
// Allow only 3 attempts to enter password. If correct password entered within 3 chances stop otherwise account locked.

let chances = 3;
let password = "shaurya"
while (chances > 0) {
    let tryPass = prompt(`Enter the password. You have ${chances} chances left`);
    if (tryPass === password) {
        console.log("Correct Password! Access Granted");
        break;
    }
    --chances;
    console.log(`Wrong Password !! Try again.`);
}

if (chances === 0) {
    console.log(" ACCOUNT LOCKED. Too many failed attempts.");
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 12
// ask user for words until they type stop. count how many times they type yes. Loop until " stop"  id typed. Count "yes"

let countYes = 0;

while (true) {
    let word = prompt("Enter word: ")
    if (word.toLowerCase() === "yes") {
        countYes++;
    }
    else if (word.toLowerCase() === "stop") {
        break;
    }
    else {
        continue;
    }
}

console.log(`The word "Yes" was typed ${countYes} times.`);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 13
// Print numbers divisible by 7 from 1 to 50

for (let k = 1; k < 50; k++){
    if (k % 7 === 0) {
        console.log(k);
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 14
// Sum of all odd numbers from 1 to 30. Print final sum
let sum = 0;
for (let a = 1; a <= 30; a++){
    if (a % 2 !== 0) {
        sum += a;
    }    
}
console.log(sum);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 15
// Keep asking number until user enters an even number.

while (true) {
    let num = +prompt("Enter any number: ")
    if (num % 2 === 0)
        break;
}
console.log("Exited bcz entered an even number");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 16
// print all numbers between two numbers entered by the user.

let start = +prompt("Enter the starting number:");
let end = +prompt("Enter the ending number:");

while (start != end) {
    console.log(start);
    start++;
}


// let start = +prompt("Enter the starting number:");
// let end = +prompt("Enter the ending number:");

// console.log("--- Numbers Between ---");

// // Case 1: Counting Up (start < end)
// if (start < end) {
//     while (start <= end) { // Use <= to include the 'end' number
//         console.log(start);
//         start++;
//     }
// }
// // Case 2: Counting Down (start > end)
// else if (start > end) {
//     while (start >= end) { // Use >= to include the 'end' number
//         console.log(start);
//         start--; // Must decrement when counting down
//     }
// }
// // Case 3: Start and End are the same
// else {
//     console.log(start);
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 17
// Print only first three odd numbers from 1 to 20. stop using break.

let countOdd = 0;

while (countOdd != 3) {
    
}
