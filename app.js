// Array of words to be guessed
const words = [
    "computer",
    "elephant",
    "guitar",
    "television",
    "mountain",
    "umbrella",
    "library",
    "ocean",
    "sunflower",
    "butterfly",
    "cristiano",
];

// Array of hints corresponding to the words
const hints = [
    "Electronic device",
    "Large mammal",
    "Musical instrument",
    "Entertainment device",
    "Tall landform",
    "Rain protection",
    "Collection of books",
    "Large body of water",
    "Bright yellow flower",
    "Insect with colorful wings",
    "Best footballer ever, the GOAT",
];

// Variable to store the current word to be guessed
let displayWord = "";

// Function to shuffle the characters of a string
function shuffle(str) {
    let strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join("");
}

// Function to check the player's guess
function checkGuess() {
    let input = document.getElementById("input-word");
    if (input.value.toLowerCase() === displayWord) {
        if (displayWord.toLowerCase() === "cristiano") {
            alert("Suiiiiiiiiiiiii");
        } else {
            alert("Correct!");
        }
    } else {
        alert("Incorrect. Try again!");
    }
}

// Function to set up a new word for the game
function shuffleWord() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    let displayHint = hints[index];
    let scrambleWord = document.getElementById("scramble-word");
    // Display the scrambled word in uppercase
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint-text");
    // Display the hint
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
}

// Initialize the game by shuffling the first word
shuffleWord();