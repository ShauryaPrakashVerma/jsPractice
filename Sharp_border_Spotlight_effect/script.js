var cursor = document.querySelector("#cursor")

document.addEventListener("mousemove", function (abc) {
    cursor.style.left = abc.x + "px";
    cursor.style.top = abc.y + "px";

    console.log(abc.x,abc.y);
})