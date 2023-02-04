var characters = []

// Displays a dialogue to the screen
// - container: The HTMLElement that will show the dialogue
// - dialogue: The array containing the entire dialogue
// - currDialogue: The index of the dialogue from the array to display
function displayDialogue(container, dialogue, currDialogue) {
    // Clear the previous dialogue, if any
    container.textContent = "";
    // Loop through each letter of the selected dialogue
    dialogue[currDialogue].m.split("").forEach(character => {
        // Create a span for every character
        var span = document.createElement("span");
        // Put the current character in the span
        span.textContent = character;
        // Add the span to display it
        container.appendChild(span);
        // Add the span to the list of characters to display later
        characters.push({
            span: span,
            classes: []
        });
    });

    // Reveal the dialogue
    revealOneCharacter(characters);
}

// RECURSIVE FUNCTION
// Reveals a single character from the list of objects passed in
// - list: the array of character objects created in displayDialogue
function revealOneCharacter(list) {
    // Get the first object of the array
    var next = list.splice(0, 1)[0];
    // Add the class "revealed" to the object so the css changes its opacity to 1 and it becomes visible
    next.span.classList.add("revealed");

    // If there is more character objects left
    if (list.length > 0) {
        // Call this function again after a delay
        setTimeout(function () {
            revealOneCharacter(list);
        }, 50);
    }
    // If this was the last character of the current dialogue
    else {
        // Call the function to know what to do after a dialogue is done displaying
        messageDoneDisplaying();
    }
}
