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
    let tryPass = prompt(`Enter the password. You have ${chances} chancs left`);
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
// 
