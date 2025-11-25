var main = document.querySelector("main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function (abc) {
    cursor.style.left = abc.x + "px";
    cursor.style.top = abc.y + "px";
    console.log(abc.x);
})