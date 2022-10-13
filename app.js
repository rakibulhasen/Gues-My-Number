"use strict";
const playAgain = document.querySelector(".play-again");
const correctAns = document.querySelector(".game-correct-ans");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".guessing-text");
const check = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");

// Random Number
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

console.log(SECRET_NUMBER);

//Guessing Text
function displayGussingText(text) {
  guessingText.textContent = text;
}

// Start Game
check.addEventListener("click", function () {
  const inputNumber = Number(input.value);
  if (!inputNumber) displayGussingText("Please Input a Valid Number");
  // Correct Ans
  else if (inputNumber === SECRET_NUMBER) {
    displayGussingText("Correct Ans!");
    correctAns.textContent = SECRET_NUMBER;

    correctAns.style.backgroundColor = "#444";
    document.body.style.backgroundColor = "teal";

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  // When Not match
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGussingText(
        inputNumber > SECRET_NUMBER ? "Too Hight!" : "Too Low!"
      );
      SCORE--;
      score.textContent = SCORE;
    } else {
      guessingText.textContent = "Game Over!";
      score.textContent = 0;
      check.disabled = true;
      check.style.cursor = "inherit";
      check.style.backgroundColor = "red";
      correctAns.style.backgroundColor = "red";
      input.disabled = true;
    }
  }
});

// Play again
playAgain.addEventListener("click", function () {
  SCORE = 20;
  document.body.style.backgroundColor = "#444";
  correctAns.style.backgroundColor = "teal";
  guessingText.textContent = "Start Guessing....";
  score.textContent = SCORE;
  check.disabled = false;
  input.disabled = false;
  check.style.backgroundColor = "teal";
  check.style.cursor = "pointer";
});
