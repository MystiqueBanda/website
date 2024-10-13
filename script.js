// Function to enter the main site
function enterSite() {
    const music = document.getElementById("backgroundMusic");
    const enterPage = document.getElementById("enterPage");
    const content = document.querySelector(".content");
    const body = document.body;

    // Play music
    music.play(); 

    // Hide the enter button
    enterPage.style.display = "none"; 

    // Set the background image to the GIF
    body.style.backgroundImage = "url('background.gif')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";

    // Show the main content after a short delay
    setTimeout(() => {
        content.style.display = "block"; // Show the main content
        content.style.opacity = "1"; // Change opacity to 1 to fade in
    }, 500); // Short delay before changing the opacity
}

// Music toggle functionality
let isMusicPlaying = true;

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const toggleButton = document.getElementById("musicToggle");
    if (isMusicPlaying) {
        music.pause(); // Pause music
        toggleButton.innerText = "Play Music"; // Change button text
    } else {
        music.play(); // Play music
        toggleButton.innerText = "Pause Music"; // Change button text
    }
    isMusicPlaying = !isMusicPlaying; // Toggle state
}

// Function to play hover sound
function playHoverSound() {
    const hoverSound = document.getElementById("hoverSound");
    hoverSound.currentTime = 0; // Reset time to allow replay
    hoverSound.play(); // Play hover sound
}
