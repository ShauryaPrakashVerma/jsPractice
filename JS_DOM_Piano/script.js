// Mouse Press Play

var q = document.querySelectorAll("#keys div");
var volumeControl = document.getElementById("volumeSlider");

const keyboardKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l"];
const audFiles = ["key24.mp3","key24.mp3","key23.mp3","key22.mp3","key21.mp3","key20.mp3","key19.mp3","key18.mp3","key17.mp3","key16.mp3","key15.mp3","key14.mp3","key13.mp3","key12.mp3","key11.mp3","key10.mp3","key09.mp3","key08.mp3","key07.mp3","key06.mp3","key05.mp3","key04.mp3","key03.mp3","key02.mp3"]

q.forEach(function (user, index) { 
    
    user.addEventListener("click", function () {
        user.style.backgroundColor = "grey"

        setTimeout(() => {
            user.style.backgroundColor = "white"
        },200)

        console.log("This is key number: " + index); 
        
        var audio = new Audio(audFiles[index]); 

        audio.volume = volumeControl.value; // for controlling the volume
        audio.play();
    });

    
    
});

// Keyboard Key Press Play
document.addEventListener("keydown", function(event) {
    
    const keyPressed = event.key.toLowerCase();

    const index = keyboardKeys.indexOf(keyPressed);

    if (index !== -1) {
        
        var audio = new Audio(audFiles[index]);
        audio.play();
        
        q[index].click(); 
    }
});


// function

