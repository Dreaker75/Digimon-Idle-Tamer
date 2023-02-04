var intro_dialogue = [
    { m: "Welcome... To the Digital World!" },
    { m: "Please, enter your name" }
]
var currDialogue = 0;
var characters = []
var intro_title_container;

// Function that is called once a dialogue is finished being displayed
function messageDoneDisplaying() {
    currDialogue++;
    // If there is dialogues left to display
    if (currDialogue < intro_dialogue.length) {
        setTimeout(function() {
            // Display the next one
            displayDialogue(intro_title_container, intro_dialogue, currDialogue);
        },1000)
    }
    else {
        // Activate the name input field, and button after a delay, so the player can start the game
        document.getElementById("player-name").style.display = "block";
        
        setTimeout(function() {
            document.getElementById("start-adventure-button").style.display = "block";
        },1000)
    }
}

// Handle tamer name checks and starting the game
function startGame() {
    // Get the name the player has input
    var tamer_name = document.getElementById("player-name").value;
    // If the name field is empty, show an alert
    if (tamer_name.length == 0) {
        alert("Please input a name");
        return
    }

    // Add the name to storage temporarily to set everything up 
    localStorage.setItem("name_chosen", tamer_name)

    // Changes to current page to the main one
    window.location.href = "index.html";
}


///////////////////////////////////////////////////
// Main Code

// Called from body "onload"
document.addEventListener("DOMContentLoaded", () => {
    // Get the container that will be used to display the dialogues
    intro_title_container = document.getElementById("intro-message-block");

    // Display the first dialogue
    displayDialogue(intro_title_container, intro_dialogue, currDialogue);
})