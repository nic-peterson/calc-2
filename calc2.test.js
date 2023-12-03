// Import the functions from your calculator implementation
const {
  addNumber,
  addDecimal,
  performOperation,
  displayResult,
} = require("./script.js"); // Adjust the path as needed

// Mock the display object
const display = {
  textContent: "",
};

// Mock implementation of display update function
global.updateDisplay = (updateType, value) => {
  switch (updateType) {
    case "addNumber":
      display.textContent += value;
      break;
    case "calculationResult":
      display.textContent = value;
      break;
    case "error":
      display.textContent = "Error";
      break;
    default:
      display.textContent = "Invalid Update";
  }
};

describe("Calculator Functionality", () => {
  beforeEach(() => {
    // Reset display before each test
    display.textContent = "";
  });

  test("Adding numbers", () => {
    addNumber("5");
    expect(display.textContent).toBe("5");
    addNumber("3");
    expect(display.textContent).toBe("53");
  });

  test("Handling decimal input", () => {
    addNumber("5");
    addDecimal();
    addNumber("2");
    expect(display.textContent).toBe("5.2");
    addDecimal(); // Should not add another decimal
    expect(display.textContent).toBe("5.2");
  });

  test("Performing basic operation (e.g., addition)", () => {
    addNumber("5");
    addNumber("5");
    performOperation("+", "5");
    expect(display.textContent).toBe("60"); // Assuming your operation function updates the display
  });

  test("Display limitations", () => {
    for (let i = 0; i < 12; i++) {
      addNumber("1");
    }
    expect(display.textContent.length).toBeLessThanOrEqual(10); // Assuming MAX_DISPLAY_LENGTH is 10
  });

  // Add more tests for other functionalities like subtraction, multiplication, error handling, etc.
});
