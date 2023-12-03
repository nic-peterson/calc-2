// Import the functions from your calculator implementation
const calculator = require("./calculator.js");
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require("jsdom");
const dom = new JSDOM('<!DOCTYPE html><div id="display"></div>');
global.document = dom.window.document;
global.window = dom.window;

global.display = {
  textContent: "",
};

const mockDisplay = {
  textContent: "",
};

document.querySelector = jest.fn((selector) => {
  if (selector === "#display") {
    return mockDisplay;
  }
});

describe("add", () => {
  test("adds 0 and 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("adds 2 and 2", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test("adds positive numbers", () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe("subtract", () => {
  test("subtracts numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
});

describe("multiply", () => {
  test("multiplies two numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
});

describe("divide", () => {
  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("divides by zero", () => {
    expect(calculator.divide(10, 0)).toBe("ERROR - Cannot Divide by 0");
  });
});

describe("clearDisplay Function", () => {
  test("should reset the calculator display and state", () => {
    // Set initial state
    firstNum = 5;
    global.secondNum = 3;
    global.currentOperator = "add";
    global.operationPerformed = true;
    mockDisplay.textContent = 8;

    // call the function to test
    calculator.clearDisplay();

    // Check the display has been reset
    // expect(mockDisplay.textContent).toBe(0);

    // Check the state has been reset
    expect(global.firstNum).toBeNull();
    expect(global.secondNum).toBeNull();
    expect(global.currentOperator).toBeNull();
    expect(global.operationPerformed).toBeFalse();
  });
});
