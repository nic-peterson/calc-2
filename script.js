let display = document.querySelector(".display");

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
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "add":
      return add(x, y);
    case "subtract":
      return subtract(x, y);
    case "multiply":
      return multiply(x, y);
    case "divides":
      return divide(x, y);
  }
}

function calcInput(value) {
  if (display.textContent.length > 9 && value !== "clear") {
    display.textContent = "ERROR";
  } else if (value === "clear") {
    display.textContent = "";
  } else {
    if (display.textContent === "0") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }
}
