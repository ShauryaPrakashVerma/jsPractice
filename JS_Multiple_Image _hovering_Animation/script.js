var elem = document.querySelectorAll(".elem")

elem.forEach(function (val) {

    // console.log(val.childNodes[])               // firstChild #text secondChild #text
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1;
    });

    val.addEventListener("mousemove", function (abc) {
        val.childNodes[3].style.left = abc.x + "px";
        val.childNodes[3].style.top = abc.y + "px";
    });

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0;
    });
})