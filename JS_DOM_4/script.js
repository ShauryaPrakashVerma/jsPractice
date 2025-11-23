// setTimeout --> delay

// setTimeout(function () {
//     console.log("hello");
// },3000)


// setInterval --> continue printing after a specified gap
// var a = 0;
// var int = setInterval(function () {
//     a++;
//     console.log(a);
// },200)
// This can make the loop Infinite so to solve this we use clear interval

// setTimeout(function () {
//     clearInterval(int)
// },5000)

var btn = document.querySelector("button");
var bar = document.querySelector("#inner");
var num = document.querySelector("#actualNum");
var count = 0;

btn.addEventListener("click", function () {
    
    btn.style.pointerEvents = 'none';
    
    var time = 50 + Math.random() * 101;

    console.log("clicked");
    var int = setInterval(function () {
        count++;
        bar.style.width = count + "%";
        num.innerHTML = `${count}%`
    }, time)
    
    setTimeout(function () {
        clearInterval(int);
        btn.innerHTML = "Downloaded"
        window.alert("Downloaded !!")
        btn.style.opacity = 0.5
    }, time*100)
})
