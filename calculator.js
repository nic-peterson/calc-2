// Global Variables for Calculator
const MAX_DISPLAY_LENGTH = 10; // Max number of digits to display
const display = document.getElementById("display");
let firstNum, secondNum, currentOperator;
let operationPerformed = false;

// Operator Functions
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  if (secondNum === 0) {
    console.log("ERROR - Cannot Divide by 0");
    return "ERROR - Cannot Divide by 0";
  }
  return firstNum / secondNum;
}

// User Input Functions
console.log(display);
function clearDisplay() {
  firstNum = null;
  secondNum = null;
  currentOperator = null;
  operationPerformed = false;
  // display.textContent = "0";
}
// Logic Functions
