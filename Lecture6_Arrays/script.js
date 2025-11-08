// ARRAYS

// CREATING ARRAYS:
// let arr = [];
// let arr = new Array();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.push(10);   // adds on element to the last
console.log(arr);

arr.pop();   // removes one element from the last
console.log(arr);

arr.shift();   // removes one element from the front
console.log(arr);

arr.unshift(0);  // add one element to the starting  
console.log(arr);

arr.splice(2,3);   // removes element from the middle  (start index, no of elements to remove)
console.log(arr);
// can also be used to replace a paricular element
// let arr = [1, 2, 3, 4];
// arr.splice(2, 1, 99); // Replace the element at index 2 with 99   // can add multiple value to the array by providing the elements to be added seperated by commas (here after 99)
// console.log(arr); // Output: [1, 2, 99, 4]

let newArr = arr.slice(2, 5);   // doesn't change the original array instead creates it own modifies copy (start index [inclusive] , stop index [exclusive])
console.log(arr);               // extract a subarray out of the provided array
console.log(newArr);

arr.reverse();   // reverses the array. changes the main array.
console.log(arr);


// sort
let sr = arr.sort(function (a, b) {
    return a - b;  // b-a for descending order;
});
console.log(sr);

let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort();
console.log(names);

// 🔢 Sorting Numerical Arrays
    // When you apply sort() to a numerical array like [1, 2, 10, 20]:
    // The elements are converted to strings: ["1", "2", "10", "20"].
    // The strings are sorted alphabetically:
    // "1" comes before "10" (because '1' is the first character in both).
    // "1" comes before "2".
    // "10" comes before "2".
    // "2" comes before "20".
    // The result would be [1, 10, 2, 20], which is incorrect numerically.

    // To perform a proper numerical sort, you must provide a compare function (e.g., (a, b) => a - b). This function tells the sort() method how to compare two elements, ensuring they are treated as numbers, not strings.
    // a - b returns a negative number if a < b (keep a before b for ascending order).
    // a - b returns a positive number if a > b (put b before a for ascending order).
    // a - b returns zero if a == b (keep their relative positions).

// 🔠 Sorting String Arrays
    // When you apply sort() to a string array like ["Zara", "Arjun", "Mira"]:
    // The elements are already strings.
    // The default behavior of sorting by Unicode code point values works perfectly for standard alphabetical order:
    // "A" comes before "B", "M", "Z", etc.
    // The result is correct: ["Arjun", "Bhavya", "Mira", "Zara"].



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// forEach
arr.forEach(function (val) {
    console.log(val + "hi");
});

// map
// everything should be returned
// only use when jab aapko ek naya array banana hai picchle array ke data ke basis par
// map dikhte hi man me ek blank array bana lena
// similar to forEach but return is necessary. if we dont return anything then the value returned will be undefined.
let answer = arr.map(function (val) {
    return 12;
});
console.log(answer);


// filter
// choose what you want to return
let A = [1, 2, 3, 4, 5, 5, 6, 23, 34, 54];
let filterAns = A.filter(function (val) {
    if (val > 4) {
        return true;
    }
});
console.log(filterAns);


// reduce
// reduce the whole array to a single value
let ans = A.reduce(function (accumulator, val) {
    return accumulator + val;

}, 0);
console.log(ans);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// find
// accepts a function
let va = A.find(function (val) {              // returns the actual value of the first element which satisfies the given condition
    return val === 23;
});

// let va = A.findIndex(function (val) {      // returns the index of the position where the first element satisfying the conditions is found
//     return val === 23;
// });

console.log(va);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// some
// returns true even if any one of the elements satisfy the following condition
let any = A.some(function (val) {
    return val > 5;
});
console.log(any);


// every
// returns true if all the elements satisfy the following condition
let eve = A.every(function (val) {
    return val > 5;
});
console.log(eve);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// destructuring (similar to tuple unpacking in Python)

let arry = [1, 2, 3, 4, 5, 6];
let [x, y] = arry;
// let [x, b, , c] = arry; suppose if we want to store value 4 in a variable and skip the value 3.

// Spread operator
let arr2 = [...arry];  // way to create a copy of an array

// arr = [1,2,3,4]
// let arr2 = arr     //this is not the method to copy an array because it is a reference variable and it does not get copied directly instead it passes a reference of the array i.e an address to the original array

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Merge two arrays using the spread operator
let a1 = [1, 2];
let a2 = [3, 4];
let c = [...a1, ...a2];
console.log(c);



