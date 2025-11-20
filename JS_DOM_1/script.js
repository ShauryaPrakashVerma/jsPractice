// Four pillars of DOM:-
// 1. Selection of an elemnet
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// SELECTION OF AN ELEMENT-
// var a = document.querySelector("h1");
// console.log(a);

// Changing HTML
// var a = document.querySelector("h1");
// a.innerHTML = "Changed";

// Changing CSS
// var a = document.querySelector("h1");
// a.style.color = "green";    // write in camel case
// a.style.backgroundColor = "red";

// EVENT LISTENER
// var a = document.querySelector("h1");
// a.addEventListener("click", function () {
//     console.log("hello");
// })




// if there are multiple elements to selected of the same type then document.querySelectorAll() is used
// output of query selector all is a node list
// it is similar to a node list
// to traverse it use forEach Loop


// selecting element by id
// document.getElementById("Box1")  //we dont need to use id as #Box1 here as it is already get element by id
// document.getElementByClassName("Boxes")    //we dont need to use class as .Boxes here as it is already get element by class


// var box = document.querySelector("#box")
// box.innerHTML = "<h1>Hello</h1>"             // this will not be visible as complete text but as a tag h1 with hello inside it.
// box.textContent = "<h1>Hello</h1>"           // this will be visible as complete text i.e. the text between " " will be displayed as it is
