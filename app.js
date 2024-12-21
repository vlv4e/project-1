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
    "pineapple",
    "jungle",
    "astronaut",
    "waterfall",
    "volcano",
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
    "Best footballer ever, the GOAT",
    "Tropical fruit",
    "Tropical forest",
    "Space traveler",
    "Falling water",
    "Erupting mountain",
];
let displayWord = "";
let timer;
let correctCount = 0;

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

function checkGuess() {
    let input = document.getElementById("input-word");
    if (input.value.toLowerCase() === displayWord) {
        if (displayWord.toLowerCase() === "cristiano") {
            alert("Suiiiiiiiiiiiii");
        } else {
            alert("Correct!");
            correctCount++;
            updateCorrectCount();
            clearInterval(timer);
            startTimer();
            shuffleWord();
        }
    } else {
        alert("Incorrect. Try again!");
    }
}

function shuffleWord() {
    document.getElementById("input-word").value = "";

    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    let displayHint = hints[index];
    let scrambleWord = document.getElementById("scramble-word");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint-text");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
}

function startTimer() {
    let timeLeft = 20;
    timer = setInterval(() => {
        document.getElementById("countdown").innerText = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            alert("Time's up!");
            resetGame();
        }
    }, 1000);
}

function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("check-button").style.display = "inline-block";
    document.getElementById("shuffle-button").style.display = "inline-block";
    document.getElementById("timer").style.display = "block";
    // Hide the correct count initially
    document.getElementById("correct-guessed").style.display = "block";
    document.getElementById("correct-count").innerText = correctCount;
    startTimer();
    shuffleWord();
}

function updateCorrectCount() {
    document.getElementById("correct-count").innerText = correctCount;
}

function resetGame() {
    clearInterval(timer);
    correctCount = 0;
    updateCorrectCount();
    shuffleWord();
    startTimer();
}