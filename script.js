"use strict";

//Element Selector
const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".guessing-text");
const correctAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-agin");

//variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

console.log(SECRET_NUMBER);

//Display text
function displayGussingText(text) {
  guessingText.textContent = text;
}

//addEventlistner
check.addEventListener("click", function () {
  const inputNumber = Number(input.value);
  console.log(inputNumber);

  if (!inputNumber) displayGussingText("Input a valid number!");
  // when player wins
  else if (inputNumber === SECRET_NUMBER) {
    displayGussingText("Correct ans!");
    correctAns.textContent = SECRET_NUMBER;

    correctAns.style.backgroundColor = "#222";
    document.body.style.backgroundColor = "teal";

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  // when guess is wrand
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGussingText(inputNumber > SECRET_NUMBER ? "Too High!" : "Too Low");
      SCORE--;
      score.textContent = SCORE;
    } else {
      displayGussingText("Game Over!");
      score.textContent = 0;
    }
  }
});

// Play Again
playAgain.addEventListener("click", function () {
  SCORE = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);

  console.log(SECRET_NUMBER);

  displayGussingText("Start Guessing...");
  document.body.style.backgroundColor = "#444";
  correctAns.style.backgroundColor = "teal";
  correctAns.textContent = "?";
  score.textContent = SCORE;
  input.value = "";
});
