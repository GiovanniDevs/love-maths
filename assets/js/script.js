document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked submit");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`you clicked ${gameType}`);
      }
    });
  }
});
/**
 * The main game loop is called on script loading
 * and after the user answer has been processed
 */
function runGame() {
  // create 2 random numbers 0 - 25
  let num1 = Math.floor(Math.random() / 25 + 1);
  let num2 = Math.floor(Math.random() / 25 + 1);
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
