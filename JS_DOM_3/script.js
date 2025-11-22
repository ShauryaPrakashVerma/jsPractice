// createElement
// creates element on clicking the button

// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     var h1 = document.createElement("h1");
//     h1.innerHTML = "Hi my name is shaurya!"
//     console.log(h1);
// })

// appendChild
// var btn = document.createElement("button")
// btn.innerHTML = "Hi my name is shaurya!!"

// var main = document.querySelector("button");
// main.appendChild(btn);

var btn = document.querySelector("button");
var main = document.querySelector("main");

btn.addEventListener("click", function () {
  var hi = document.createElement("div");

  var x = Math.floor(Math.random() * 100); //left
  var y = Math.floor(Math.random() * 100); // top
  var dg = Math.random() * 90; // rotation

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  hi.style.height = "100px";
  hi.style.width = "100px";
  hi.style.backgroundColor = `rgb(${r},${g},${b})`;
  hi.style.position = "absolute";
  hi.style.rotate = `${dg}deg`;
  hi.style.top = `${x}%`;
  hi.style.left = `${y}%`;

  console.log(x, y);

  main.appendChild(hi);
});
