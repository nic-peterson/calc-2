// Global Variables for Calculator
let firstNum = null;
let secondNum = null;
let currentOperator = null;
let operationPerformed = false;

const MAX_DISPLAY_LENGTH = 10; // Max number of digits to display
const display = document.getElementById("display");
display.textContent = "0";

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

// Event Listeners
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

// User Input Functions
function clearDisplay() {
  firstNum = null;
  secondNum = null;
  currentOperator = null;
  operationPerformed = false;
  display.textContent = "0";
}

function inputNumber(num) {
  if (operationPerformed || display.textContent === "0" || currentOperator) {
    display.textContent = num;
    operationPerformed = false;
  } else {
    display.textContent += num;
  }

  updateCurrentNumber();
}

function inputOperator(operator) {
  console.log(
    `At the start of inputOperator()\n
    firstNum: ${firstNum}, secondNum: ${secondNum},
    currentOperator: ${currentOperator}, 
    operationPerformed: ${operationPerformed}`
  );
  if (secondNum === null) {
    console.log(
      `At the start of inputOperator() (secondNum === null)\n
      firstNum: ${firstNum}, secondNum: ${secondNum},
      currentOperator: ${currentOperator}, 
      operationPerformed: ${operationPerformed}`
    );
    updateCurrentNumber();
    currentOperator = operator;
    operationPerformed = false;
    console.log(
      `At the end of inputOperator() (secondNum === null)\n
      firstNum: ${firstNum}, secondNum: ${secondNum},
      currentOperator: ${currentOperator}, 
      operationPerformed: ${operationPerformed}`
    );
  } else {
    console.log(
      `At the start of inputOperator() (secondNum !== null)\n
      firstNum: ${firstNum}, secondNum: ${secondNum},
      currentOperator: ${currentOperator}, 
      operationPerformed: ${operationPerformed}`
    );
    const result = operate();
    updateDisplay(result);
    firstNum = result;
    secondNum = null;
    console.log(
      `At the end of inputOperator() (secondNum !== null)\n
      firstNum: ${firstNum}, secondNum: ${secondNum},
      currentOperator: ${currentOperator}, 
      operationPerformed: ${operationPerformed}`
    );
  }
  console.log(
    `At the end of inputOperator() \n
    firstNum: ${firstNum}, secondNum: ${secondNum},
    currentOperator: ${currentOperator}, 
    operationPerformed: ${operationPerformed}`
  );
}

function inputDecimal() {
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
  if (currentOperator === null) {
    firstNum = display.textContent;
  } else {
    secondNum = display.textContent;
  }
}

function updateDisplay(value) {
  display.textContent = value.toString().slice(0, 10);
}
