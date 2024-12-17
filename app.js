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
];

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
];

let displayWord = "";

function shuffle(str) {
    strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join("");
}

function checkGuess() {
    let input = document.getElementById("input-word");
    if (input.value.toLowerCase() === displayWord) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }
}

function shuffleWord() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    let displayHint = hints[index];
    let scrambleWord = document.getElementById("scramble-word");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint-text");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
}

shuffleWord();