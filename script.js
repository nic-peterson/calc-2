// Global Variables for Calculator
const MAX_DISPLAY_LENGTH = 10; // Max number of digits to display
let display = document.querySelector(".display");
let x, y, operator;

// Operator Functions
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    console.log("ERROR - Cannot Divide by 0");
    updateDisplay("ERROR", true);
    // displayError("ERROR - Cannot Divide by 0");
    return "ERROR - Cannot Divide by 0";
  }
  return x / y;
}

// Calculator Functions

// -> Updating Display
function updateDisplay(updateType, value) {
  switch (updateType) {
    case "clear":
      clearDisplay();
      break;
    case "addNumber":
      addNumberToDisplay(value);
      break;
    case "calculateResult":
      setCalculationResult(value);
      break;
    case "error":
      displayError(value);
      break;
    default:
      console.error("Invalide update type");
  }
}

function clearDisplay() {
  display.textContent = "";
}

function addNumberToDisplay(num) {
  let currentValue = display.textContent;
  if (currentValue.length < MAX_DISPLAY_LENGTH) {
    display.textContent = currentValue === "0" ? num : currentValue + num;
  } else {
    updateDisplay("error", "ERROR - Too Many Digits");
  }
}

function displayError(error) {
  display.textContent = error;
}

function setCalculationResult(result) {
  let resultStr = String(result);
  if (resultStr.length > MAX_DISPLAY_LENGTH) {
    // Handle long results (e.g., rounding, exponential notation)
    resultStr = handleLongResult(resultStr);
  }
  display.textContent = result;
}

function handleLongResult(resultStr) {
  // TODO
  // Implement logic to handle long results (e.g., rounding, using toExponential)
  // Example: return a rounded or formatted number
  return parseFloat(resultStr).toPrecision(MAX_DISPLAY_LENGTH - 1);
}

// -> User Input
// TODO
function validateInput(value) {
  if (display.textContent.length > 7 && value !== "clear") {
    clearDisplay();
    updateDisplay("error", "ERROR - Too Many Digits");
  }
}

// TODO
function calcInput(value) {
  validateInput(value);
  updateDisplay("addNumber", value);
}

// Operations
function operate(operator, x, y) {
  switch (operator) {
    case "add":
      return add(x, y);
    case "subtract":
      return subtract(x, y);
    case "multiply":
      return multiply(x, y);
    case "divide":
      return divide(x, y);
  }
}

// TODO -> Need to figure out logic for complex operations
function setNum(num) {
  if (num === "x") {
    if (display.textContent.includes(".")) {
      x = parseFloat(display.textContent);
    } else {
      x = parseInt(display.textContent);
    }
  } else if (num === "y") {
    if (display.textContent.includes(".")) {
      y = parseFloat(display.textContent);
    } else {
      y = parseInt(display.textContent);
    }
  }
}

// TODO -> Need to figure out logic for complex operations
function setOperator(operatorChoice) {
  operator = operatorChoice;
  if (x === undefined) {
    setNum("x");
  } else {
    evaluateOp();
  }
  clearDisplay();
  console.log("setOperator");
  console.log(`x: ${x} y: ${y} operator: ${operator}`);
}

// TODO -> Need to figure out logic for complex operations
function evaluateOp() {
  setNum("y");
  clearDisplay();
  updateDisplay(y, false);
  // setDisplay(y);

  setDisplay(operate(operator, x, y), false);

  console.log(`x: ${x} y: ${y} operator: ${operator}`);
  console.log(`x {type: ${typeof x}}: ${x} y {type: ${typeof y}}: ${y}`);
}
