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
    return "ERROR - Cannot Divide by Zero";
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

function calcInput(value) {
  if (display.textContent.length > 9 && value !== "clear") {
    display.textContent = "ERROR";
  } else if (value === "clear") {
    clearDisplay();
  } else {
    if (display.textContent === "0") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }
}

function setNum(num) {
  console.log("setNum");
  console.log(`num: ${num}`);
  if (display.textContent.includes(".")) {
    num = parseFloat(display.textContent);
  } else {
    num = parseInt(display.textContent);
  }
  console.log(`num: ${num}`);
}

function setOperator(operatorChoice) {
  operator = operatorChoice;
  if (x === undefined) {
    if (display.textContent.includes(".")) {
      x = parseFloat(display.textContent);
    } else {
      x = parseInt(display.textContent);
    }
  } else {
    evaluateOp();
  }
  clearDisplay();

  console.log("setOperator");
  console.log(`x: ${x} y: ${y} operator: ${operator}`);
}

function evaluateOp() {
  setNum(y);

  if (display.textContent.includes(".")) {
    y = parseFloat(display.textContent);
  } else {
    y = parseInt(display.textContent);
  }

  display.textContent = operate(operator, x, y);
  console.log(`x: ${x} y: ${y} operator: ${operator}`);
  console.log(`x {type: ${typeof x}}: ${x} y {type: ${typeof y}}: ${y}`);
}
