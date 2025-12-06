// Mouse Press Play

// Keep your selector and your audio files list exactly the same
var q = document.querySelectorAll("#keys div");

// Add this at the top with your audFiles
const keyboardKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l"];
const audFiles = ["key24.mp3","key24.mp3","key23.mp3","key22.mp3","key21.mp3","key20.mp3","key19.mp3","key18.mp3","key17.mp3","key16.mp3","key15.mp3","key14.mp3","key13.mp3","key12.mp3","key11.mp3","key10.mp3","key09.mp3","key08.mp3","key07.mp3","key06.mp3","key05.mp3","key04.mp3","key03.mp3","key02.mp3"]

// DELETE "var num = 1;" -- You don't need this anymore!

// Update the loop to accept the 'index'
q.forEach(function (user, index) { 
    
    user.addEventListener("click", function () {
        // purely for debugging to see which key number this is
        console.log("This is key number: " + index); 
        
        // Use 'index' to grab the specific file for THIS specific key
        var audio = new Audio(audFiles[index]); 
        
        audio.play();
    });

    
    
});

// Keyboard Key Press Play
// This goes outside your forEach loop
document.addEventListener("keydown", function(event) {
    
    // 1. Get the letter pressed (convert to lowercase so 'Q' and 'q' both work)
    const keyPressed = event.key.toLowerCase();

    // 2. Check: Is this letter in our list?
    // .indexOf() tells us the position number (0, 1, 2...). 
    // If it returns -1, it means the key is NOT in the list.
    const index = keyboardKeys.indexOf(keyPressed);

    // 3. If we found a valid key (index is not -1)
    if (index !== -1) {
        
        // Play the sound at that specific Index
        var audio = new Audio(audFiles[index]);
        audio.play();
        
        // Optional: Trigger a visual click on the key so it lights up!
        // This 'clicks' the HTML element for you
        // q[index].click(); 
    }
});


// function

