// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
    // Add event listener to the answer box to add the option of using the enter key instead of clicking on submit

    document
      .getElementById("answer-box")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          checkAnswer();
        }
      });
  }
  // Running addition on page load to have a baseline quiz ready
  runGame("addition");
});
/**
 * The main game loop is called on script loading
 * and after the user answer has been processed
 */
function runGame(gameType) {
  // empties the answer box so is ready for typing and set the focus on it
  document.getElementById("answer-box").value = "";
  document.getElementById("answer-box").focus();

  // create 2 random numbers 0 - 25
  let num1 = Math.floor(Math.random() * 25 + 1);
  let num2 = Math.floor(Math.random() * 25 + 1);

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
  } else {
    alert(`unknown game type: ${gameType}`);
    throw `unknown game type, aborting`;
  }
}

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("hey u got it right");
  } else {
    alert(`the correct answer was ${calculatedAnswer[0]}`);
  }

  runGame(calculatedAnswer[1]);
}

/** Gets all the values directly from the DOM in order to avoid declaring global variables
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else if (operator === "-") {
    return [operand1 - operand2, "subtract"];
  } else {
    alert(`unknown operator: ${operator}`);
    throw `unknown operator, aborting`;
  }
}

/**
 * Gets the current score from the DOM and increments is
 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById("correct").innerText);
  document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent =
    operand1 > operand2 ? operand1 : operand2;

  document.getElementById("operand2").textContent =
    operand1 > operand2 ? operand2 : operand1;
  document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}
