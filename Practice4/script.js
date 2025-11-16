// ----------------------------------------
// SECTION 3 — Arrays and Objects
// ----------------------------------------
// 🟢 EASY

// Create an array of numbers and print its elements.

// Add two elements using push() and remove one using pop().

// Convert an array to string using join() and toString().

// Reverse an array without using reverse() (write logic manually).

// Create an object and read its keys and values.




// 🟡 MEDIUM

// Given:

// [10, 20, 30, 40, 50]


// remove first using shift()

// add at beginning using unshift()

// Use array destructuring to extract the first two elements.

// Use filter() to return even numbers.

// Use map() to double all numbers in an array.

// Use reduce() to calculate total price:

// [{price: 100}, {price: 200}, {price: 50}]


// Use spread operator to merge two arrays.

// Traverse all keys of an object using:

// Object.keys()

// for-in

//     Explain how objects are stored in memory(reference type).




//     🔴 HARD

// Write a custom implementation of reduce function.

// Sort an array of objects by age:

// [{name:"A", age:20},{name:"B", age:15}]


// Deep clone an object WITHOUT using JSON.parse(JSON.stringify()).

// Convert an object to array of key-value pairs and back.

// Given a nested object:

// {a:{b:{c:10}}}


// Write a function to extract a deep key: get(obj, "a.b.c") → 10
// 54. Implement a CRUD system using objects:

// add user

// update user

// delete user

// read user




// --------------------------------
// SECTION 4 — Timing Events
// --------------------------------
// 🟢 EASY

// Write a setTimeout() that prints “Hello” after 2 seconds.

// 🟡 MEDIUM

// Use setInterval() to print time every second.

// Write a program that stops the interval using clearInterval() after 10 seconds.

// 🔴 HARD

// Create a timer countdown (example: 10 → 0) using setInterval.

// Create a self-adjusting timer (doesn’t drift due to event loop delays).

// Simulate repeated API calls every 3 seconds, stop after 5 attempts.




// ------------------------------------------
// FINAL SECTION — MIXED ADVANCED PRACTICE
// ------------------------------------------
// 🟡 MEDIUM

// Write a function that:

// takes an array of objects

// filters only active users

// returns their names in uppercase

// sort alphabetically

// Using recursion + objects: count how many keys exist in a deeply nested object.

// 🔴 HARD — GOD-LEVEL

// Implement a fully working Event Emitter class like Node.js:

// on(event, listener)
// emit(event)
// off(event)


// Write a function that:

// accepts an array

// removes duplicates

// sorts it

// converts to object where keys = index and values = element

// Build a mini task scheduler:

// addTask(fn, delay)
// runTasks()


// Implement a curry function:

// curry(add)(1)(2)(3)


// Create your own version of Promise using:

// pending

// resolved

// rejected states

// then()

// catch()

// Create a recursive function that prints all paths of a nested object:

// {a:{b:{c:1,d:2}}, x:{y:3}}
// →
// a.b.c
// a.b.d
// x.y


// Implement a mini JSON parser (parse only objects, arrays, numbers, strings, booleans).

// Implement your own setInterval() using setTimeout() only.