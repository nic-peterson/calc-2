// Global Variables for Calculator
// These global variables handle calculator state & logic

let firstNum = null;
let secondNum = null;
let currentOperator = null;
let operationPerformed = false;

// Set max display length
const MAX_DISPLAY_LENGTH = 10; // Max number of digits to display

// Initializes display and sets default to 0
const display =
  typeof document !== "undefined" ? document.getElementById("display") : null;

if (display) {
  display.textContent = "0";
}

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
    return "ERROR - Cannot Divide by 0";
  }
  return firstNum / secondNum;
}

// Event Listeners
if (typeof document !== "undefined") {
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
}

// User Input Functions
function clearDisplay() {
  firstNum = null;
  secondNum = null;
  currentOperator = null;
  operationPerformed = false;
  if (display) {
    display.textContent = "0";
  }
}

function inputNumber(num) {
  if (!display) return;

  if (operationPerformed || display.textContent === "0") {
    display.textContent = num;
    operationPerformed = false;
  } else {
    display.textContent += num;
  }

  updateCurrentNumber();
}

function inputOperator(operator) {
  if (operationPerformed) {
    // Just update the operator if the last action was an operation
    currentOperator = operator;
  } else {
    if (secondNum !== null) {
      // If there's a second number, perform the calculation
      firstNum = operate();
      updateDisplay(firstNum);
      secondNum = null;
    } else if (!firstNum) {
      // If there's no first number, set it to the current display
      firstNum = display.textContent;
    }
    currentOperator = operator;
    operationPerformed = true; // Set the flag as an operation is now performed
  }
}

function inputDecimal() {
  if (!display) return;

  if (operationPerformed) {
    display.textContent = "0";
    operationPerformed = false;
  }

  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
  updateCurrentNumber();
}

// Logic Functions
function performCalculation() {
  if (secondNum !== null) {
    const result = operate();
    updateDisplay(result);
    firstNum = result;
    secondNum = null;
    operationPerformed = true;
    currentOperator = null;
  }
}

function operate() {
  switch (currentOperator) {
    case "add":
      return add(parseFloat(firstNum), parseFloat(secondNum));
    case "subtract":
      return subtract(parseFloat(firstNum), parseFloat(secondNum));
    case "multiply":
      return multiply(parseFloat(firstNum), parseFloat(secondNum));
    case "divide":
      return divide(parseFloat(firstNum), parseFloat(secondNum));
    default:
      return 0;
  }
}

function updateCurrentNumber() {
  if (!display) return;

  if (currentOperator === null) {
    firstNum = display.textContent;
  } else {
    secondNum = display.textContent;
  }
}

function normalizeFloat(value) {
  return Math.round((value + Number.EPSILON) * 1e10) / 1e10;
}

function updateDisplay(value) {
  if (!display) return;

  if (typeof value === "string") {
    display.textContent = value;
    return;
  }

  // Normalize floating-point noise (e.g., 0.1 + 0.2) before displaying.
  const normalized = normalizeFloat(value);
  const output = normalized.toString();

  display.textContent =
    output.length > MAX_DISPLAY_LENGTH
      ? normalized.toPrecision(MAX_DISPLAY_LENGTH)
      : output;
}

if (typeof module !== "undefined") {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    normalizeFloat,
  };
}
