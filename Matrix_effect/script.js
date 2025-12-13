var p = document.querySelector("p");
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = p.innerText

let iteration = 0;

function randomText() {
    const str = text.split("").map((char, index) => {
        if (index < iteration) {
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")

    p.innerText = str

    iteration += 0.2;
}

p.addEventListener("mouseenter", function (char, index) {
    setInterval(randomText, 30);    
})


// p.addEventListener("mouseenter", function (char,index) {
//   setInterval(() => {
//       const str = p.innerText.split("").map((char, index) => {
//           if (index < iteration) {
//               return char
//           }
//           return characters.split("")[Math.floor(Math.random() * 52)];
//         // putting * 53 slowly eats away the string . ie. the string slowly decreases the size.
//         // https://gemini.google.com/share/70d68748b604
//         // this is 53 is beyond the size of the characters string.
//         // can be used as a feature
//         // possibly to animate
//       })
//       .join("");

//     iteration += 2;

//     console.log(iteration, char, index);
//     p.innerText = str;
//   }, 50);
// });
