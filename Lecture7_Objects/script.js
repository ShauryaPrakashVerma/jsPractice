// OBJECTS
// the key in objects can be a number or a boolean

// let obj = {};  blank object

// creation
let obj = {
    name: "Shaurya",
    age: 22,
    DOB: "5/10/2003"
};

// accessing
console.log(obj.DOB)     // using . operator

console.log(obj["DOB"])    // using [] square brackets

let aa = "DOB"
// obj.aa   this is wrong way to access DOB stored in aa
// obj[aa]    //this is the write way to access DOB store in aa

console.log(obj[aa])

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// accessing in deep objects

const user = {
    name: "shaurya",
    address: {
        city: "Lucknow",
        pin: 226022,
        location: {
            lat: 23.2,
            lng: 77.4,
        }
    }
};

console.log(user.address.location.lng)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// object destructuring

let {lat, lng} = user.address.location  // this creates two varibles of the lat and lng so that you dont have to write the whole path again and again

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for in loop

let obj1 = {
    name: "shaurya",
    age: 22,
    email: "shauryaverma22@gmail.com",
};

for (let key in obj1) {
    console.log(key, obj1[key])
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Object methods

console.log(Object.keys(obj1));         // returns an array of the keys in the object
console.log(Object.entries(obj1));      // returns an array of arrays containing the key value pairs of the obj.


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

let obj2 = {
    name: "Shaurya",
    age: 22,
    email: "shauryaverma22@gmail.com",
}

let obj3 = { ...obj2 };         // creates an array of obj 2.
console.log(obj3);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

let obj4 = Object.assign({}, obj2);             // also creates a copy of the obj2. We pass an empty object and then the object we want to copy. Not very much used. Can also be used t assign a new key-vale pair
let obj5 = Object.assign({ price: "dont know" }, obj2);
console.log(obj5);
console.log(obj4);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

let obj6 = {
    name: "shaurya",
    address: {
        city: "Lucknow",
        pin: 226022,
        location: {
            lat: 23.2,
            lng: 77.4,
        }
    }
};

// nested objects can't be copied directly be the spread operator
// even after copying with the spread operator, only the top values get really copied, the values that are nested starts passing reference.
// for eg here name will be actually copied, but the adress will be passed as reference
let obj7 = { ...obj6 };
console.log(obj7);

// for this to be done we need to do deep clone
// we convert it to json string

console.log(JSON.stringify(obj6));  // converts it into a json string

let obj8 = JSON.parse(JSON.stringify(obj6));  // first converted from obj to JSON string and then from JSOON string to obj
// this creates a copy of the original object

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// optional chaining

let obj9 = {
    name: "shaurya",
    address: {
        city: "Lucknow",
        pin: 226022,
        location: {
            lat: 23.2,
            lng: 77.4,
        }
    }
};

obj.address.city    // it is conrrect only till the address field is present inside obj9, suppose someone changes the name of the address --> addresses then it will give an error, so to avoid getting an error we do optional chaining

obj?.address?.city  // optional chaining  // if incorrect it will not give error instead it will give undefined.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// computed properties
let role = "admin"
// suppose we want to create a field in obj9 named as stored in role

let obj10 = {
    name: "shaurya",
    address: {
        city: "Lucknow",
        pin: 226022,
    },
    [role] : "harsh"
};

// now whatever value will be stored in role will be stored in the object. Here admin: "harsh"
