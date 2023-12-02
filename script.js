// Global Variables for Calculator
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
    displayError("ERROR - Cannot Divide by 0");
    return;
  }
  return x / y;
}

// Calculator Functions
function clearDisplay() {
  display.textContent = "";
}

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

function validateInput(value) {
  if (display.textContent.length > 7 && value !== "clear") {
    displayError("ERROR - Too Many Digits");
  }
}

function displayError(error) {
  display.textContent = error;
}

function setDisplay(value) {
  display.textContent = value;
}

function updateDisplay(value, incr) {
  if (value === "clear") {
    clearDisplay();
  } else if (incr) {
    display.textContent += value;
  } else {
    display.textContent = value;
  }
}

function calcInput(value) {
  validateInput(value);
  updateDisplay(value, display.textContent !== "0");
}

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

function evaluateOp() {
  setNum("y");
  clearDisplay();
  setDisplay(y);

  setDisplay(operate(operator, x, y));

  console.log(`x: ${x} y: ${y} operator: ${operator}`);
  console.log(`x {type: ${typeof x}}: ${x} y {type: ${typeof y}}: ${y}`);
}

// Test
