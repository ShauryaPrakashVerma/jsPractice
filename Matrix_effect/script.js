var p = document.querySelector("p")
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


p.addEventListener("mouseenter", function () {
    
    setInterval(() => {
        const str = p.innerText.split("").map((char, index) => {
            return characters.split("")[Math.floor(Math.random() * 52)]
            // putting * 53 slowly eats away the string . ie. the string slowly decreases the size.
            // https://gemini.google.com/share/70d68748b604
            // this is 53 is beyond the size of the characters string.
            // can be used as a feature
            // possibly to animate
        }).join("")

        
        p.innerText = str
    },50)
    


})