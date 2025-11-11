// Print Even numbers from 1 to 20
// for (let i = 1; i < 21; i++){
//     if (i % 2 === 0)        // use === not ==
//         console.log(i);
// };

// reverse numbers print from 10 to 1
// for (let i = 10; i > 0; i--){
//     console.log(i);
// }

// print "yes" 5 times
// for (let i = 1; i <= 5; i++){
//     console.log("Yes")
// }

// Use prompt to ask for a number and decide whether it is +ve or -ve
// let num = +prompt("Please enter a number:");
// if (num > 0)
//     console.log("Positive");
// else
//     console.log("No");

// IF WE WANT TO INPUT NUMBER FROM PROMPT THEN WE HAVE TO CONVERT IT FROM STRING TO NUMBER:
// THREE WAYS:
// number
// + sign before prompt
// parseInt
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// It is possible that the user doesnt enter anything or presses the cancel button or OK button. in this case the value is null

// take 12 from input and check if it equal to 12

let num = prompt("Enter Number:");
// let num = Number(prompt("Enter number:"));
// let num = +prompt("Enter Number:");
// num = parseInt(num)
if (num === 12)
    {console.log("equal");}
else if ((num === null) || (num.trim() === ""))
{ console.error("didnt enter any number"); }
else if (isNaN(Number(num.trim()))) {
    console.log("Number daalo brooooo");
}
else
    { console.log("Not equal"); }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// to handle if the user presses ok or cancel blindly without entering anything or enters a string consisting of just spaces.

// let name1 = prompt("Enter name:");

// if ((name1.trim() === "") || (name1 === null)) {
//     console.error("This is no name");
// }



