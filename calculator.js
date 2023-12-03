// Global Variables for Calculator
let firstNum, secondNum, currentOperator;
let operationPerformed = false;

const MAX_DISPLAY_LENGTH = 10; // Max number of digits to display
const display = document.getElementById("display");

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
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const { value, className } = button;
    if (className.includes("number")) {
      inputNumber(value);
    } else if (className.includes("operator")) {
      inputOperator(value);
    } else if (value === ".") {
      inputDecimal();
    } else if (value === "=") {
      performCalculation();
    } else if (value === "C") {
      clearDisplay();
    }
  });
});

function clearDisplay() {
  firstNum = null;
  secondNum = null;
  currentOperator = null;
  operationPerformed = false;
  display.textContent = "0";

  console.log(
    `firstNum: ${firstNum} secondNum: ${secondNum} currentOperator: ${currentOperator} operationPerformed: ${operationPerformed}`
  );
}

function inputOperator(value) {
  console.log(value);
}

function inputNumber(value) {
  console.log(value);
}

function inputDecimal() {
  console.log(".");
}

function performCalculation() {
  console.log("perform calculation!");
}

// Logic Functions
