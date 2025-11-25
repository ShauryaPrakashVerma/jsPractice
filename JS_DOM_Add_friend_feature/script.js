var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var h5 = document.querySelector("h5")

var count = 1;

add.addEventListener("click", function () {
    count++;
    console.log(count)
    if (count % 2 == 0) {
        // console.log(count + "added");
        h5.innerHTML = "Friends";
        h5.style.color = "green"
        add.innerHTML = "Remove"
        add.style.background = "red"
    }
    else {
        // console.log(count + "removed")
        h5.innerHTML = "Stranger";
        h5.style.color = "red"
        add.innerHTML = "Add Friend"
        add.style.background = "green"
    }
    
})

