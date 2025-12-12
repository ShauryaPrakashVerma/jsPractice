var cursor = document.querySelector("#cursor")

// for moving the whole div
// document.addEventListener("mousemove", function (abc) {
//     cursor.style.left = abc.x + "px";
//     cursor.style.top = abc.y + "px";

//     console.log(abc.x,abc.y);
// })


// for moving just the gradient
document.addEventListener("mousemove", function (abc) {
    document.body.style.setProperty("--x", abc.clientX + "px");
    document.body.style.setProperty("--y", abc.clientY + "px");

})