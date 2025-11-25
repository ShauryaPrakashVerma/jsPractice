var pic = document.querySelector("#pic");
var heart = document.querySelector("#love");

pic.addEventListener("dblclick", function () {
    
    heart.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
    heart.style.opacity = "1";
    console.log("clicked");
})

setTimeout(function () {
    heart.style.opacity = "0";
    // heart.style.transform = 'translate(-50%,-50%) scale(0) rotate(0deg)'
}, 3000)
