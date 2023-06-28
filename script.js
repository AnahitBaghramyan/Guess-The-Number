"use strict";

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 25;
let highestScore = 0;

const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const setNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Case : no input
  if (!guess) {
    setMessage("⛔️ No number!");

    // Case : guess is right & player wins
  } else if (guess === secretNumber) {
    setMessage("🎉 Correct Number!");
    setNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#024603";
    document.querySelector(".number").style.width = "320px";
    document.querySelector(".number").style.fontSize = "46px";

    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".highscore").textContent = highestScore;
    }

    // Case : guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      setScore(score);
    } else {
      setMessage("💥 You lost the game!");
      setScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 25;
  secretNumber = Math.trunc(Math.random() * 25) + 1;

  setMessage("Start guessing...");
  setScore(score);
  setNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#024603";
  document.querySelector(".number").style.width = "200px";
});
