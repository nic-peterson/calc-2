// Global Variables for Calculator
const MAX_DISPLAY_LENGTH = 10; // Max number of digits to display
let display = document.querySelector(".display");
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
    updateDisplay("ERROR", true);
    // displayError("ERROR - Cannot Divide by 0");
    return "ERROR - Cannot Divide by 0";
  }
  return firstNum / secondNum;
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
  // Implement logic to handle long results (e.g., rounding, using toExponential)
  // Example: return a rounded or formatted number
  return parseFloat(resultStr).toPrecision(MAX_DISPLAY_LENGTH - 1);
}

function addDecimal() {
  let currentValue = display.textContent;

  // Check if decimal already exists
  if (!currentValue.includes(".")) {
    display.textContent = currentValue + ".";
  }
}

// -> User Input
// TODO

// TODO
function calcInput(value) {
  inputNumber(value);
  updateDisplay("addNumber", value);
}

// Operations
function operate() {
  if (secondNum === null) {
    return firstNum; // No operation to perform
  }
  let result;
  switch (currentOperator) {
    case "add":
      result = add(firstNum, secondNum);
      break;
    case "subtract":
      result = subtract(firstNum, secondNum);
      break;
    case "multiply":
      result = multiply(firstNum, secondNum);
      break;
    case "divide":
      result = divide(firstNum, secondNum);
      break;
    default:
      console.error("Invalid operator");
  }

  return result;
}

function inputNumber(num) {
  if (operationPerformed) {
    firstNum = num;
    operationPerformed = false;
  } else {
    if (currentOperator === null) {
      firstNum = firstNum === null ? num : firstNum + num;
    } else {
      secondNum = secondNum === null ? num : secondNum + num;
    }
  }
}

function inputOperator(operator) {
  if (secondNum !== null) {
    firstNum = operate();
    secondNum = null;
  }
  currentOperator = operator;
  operationPerformed = false;
}

// TODO -> Need to figure out logic for complex operations

/*
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

  upda;

  setDisplay(operate(operator, x, y), false);

  console.log(`x: ${x} y: ${y} operator: ${operator}`);
  console.log(`x {type: ${typeof x}}: ${x} y {type: ${typeof y}}: ${y}`);
}
*/
