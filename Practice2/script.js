// Question 8
// Print multiplication table of 5

// for (let i = 1; i <= 10; i++){
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 9
// check how many between 1 and 15 are greater than 8

// let count = 0;
// for (let j = 1; j < 16; j++){
//     if (j > 8)
//         count++;
// }
// console.log(count);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 10
// ask user password and print access status

// let pass = prompt("Enter the password: ");

// if (pass === "12345") {
//     console.log("Access granted");
// }
// else if (pass.trim() === "")  {
//     console.log("sahi se kariye");
// }
// else if (pass === null) {
//     console.error("empty");
// }
// else {
//     console.log("Access denied");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 11
// Allow only 3 attempts to enter password. If correct password entered within 3 chances stop otherwise account locked.

// let chances = 3;
// let password = "shaurya"
// while (chances > 0) {
//     let tryPass = prompt(`Enter the password. You have ${chances} chances left`);
//     if (tryPass === password) {
//         console.log("Correct Password! Access Granted");
//         break;
//     }
//     --chances;
//     console.log(`Wrong Password !! Try again.`);
// }

// if (chances === 0) {
//     console.log(" ACCOUNT LOCKED. Too many failed attempts.");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 12
// ask user for words until they type stop. count how many times they type yes. Loop until " stop"  id typed. Count "yes"

// let countYes = 0;

// while (true) {
//     let word = prompt("Enter word: ")
//     if (word.toLowerCase() === "yes") {
//         countYes++;
//     }
//     else if (word.toLowerCase() === "stop") {
//         break;
//     }
//     else {
//         continue;
//     }
// }

// console.log(`The word "Yes" was typed ${countYes} times.`);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 13
// Print numbers divisible by 7 from 1 to 50

// for (let k = 1; k < 50; k++){
//     if (k % 7 === 0) {
//         console.log(k);
//     }
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 14
// Sum of all odd numbers from 1 to 30. Print final sum
// let sum = 0;
// for (let a = 1; a <= 30; a++){
//     if (a % 2 !== 0) {
//         sum += a;
//     }
// }
// console.log(sum);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 15
// Keep asking number until user enters an even number.

// while (true) {
//     let num = +prompt("Enter any number: ")
//     if (num % 2 === 0)
//         break;
// }
// console.log("Exited bcz entered an even number");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 16
// print all numbers between two numbers entered by the user.

// let start = +prompt("Enter the starting number:");
// let end = +prompt("Enter the ending number:");

// while (start != end) {
//     console.log(start);
//     start++;
// }

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

// let countOdd = 0;
// let start1 = 1
// while (countOdd != 3) {
//     if (start1 % 2 !== 0) {
//         console.log(start1);
//         countOdd++;
//     }
//     start1++;
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 18
// ask user for 5 numbers. Count how many are positive
// let positive = 0;
// for (let b = 1; b <= 5; b++){
//     let numInput = +prompt(`Give number ${b}: `);
//     if (numInput > 0) {
//         positive++;
//     }
// }
// console.log(`The Number of positive numbers is ${positive}.`);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 19
// ATM simulator - Allow 3 Withdrawals
// Start with 1000 balance. Ask withdrawal amount 3 times.
// if enough balance then deduct
// else print --> Insufficient balance

alert("Welcome to ATM simulator");
let bal = 1000;
let chances = 3;
let choice = prompt(
  "Enter 1 for withdrawal \nEnter 2 for deposit \nEnter 3 for account balance enquiry \nEnter 4 for exit"
);
while (choice !== "4") {
  switch (choice) {
    case "1":
      while (chances > 0 && bal > 0) {
        let withdraw = +prompt("Enter the amount you want to withdraw: ");
        if (isNaN(withdraw) || withdraw <= 0) {
          console.log("Invalid amount entered. Please try again.");
        } else if (withdraw > bal) {
          console.log("Insufficient Balance.");
        } else {
          bal -= withdraw;
          console.log(`Successfully withdrawn ${withdraw} rupees.`);
          chances--;
        }
      }
      if (bal <= 0) {
        console.log("Insufficient balance");
      } else {
        console.log("You can only withdraw 3 times in a day.");
      }
      break;
    case "2":
      let deposit = +prompt("Enter the money you want to deposit:");
      if (isNaN(deposit) || deposit <= 0) {
        console.log("Invalid amount entered. Deposit cancelled.");
      } else {
        bal += deposit;
        console.log("Successfully desposited amount = ", deposit);
        console.log("Current account balance is ", bal);
      }
      break;
    case "3":
      console.log("The account balance is ", bal);
      console.log(`You have ${chances} withdrawal attempt(s) remaining.`);
      break;
    default:
      console.log("Invalid Choice.");
      break;
  }
  choice = prompt(
    "Enter 1 for withdrawal \nEnter 2 for deposit \nEnter 3 for account balance enquiry \nEnter 4 for exit"
  );
}
console.log("Successfully exited the ATM Simulator.");
