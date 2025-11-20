var a = document.querySelector("button");
var b = document.querySelector("#bulb");

var flag = 0;

a.addEventListener("click", function () {
    if (flag === 0) {
        b.style.backgroundColor = "yellow";
        a.textContent = "Turn OFF"
        flag = 1;
    }
    else {
        b.style.backgroundColor = "black";
        a.textContent = "Turn ON"
        flag = 0;
    }
}) 




