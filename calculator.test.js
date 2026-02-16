const assert = require("node:assert/strict");
const {
  add,
  subtract,
  multiply,
  divide,
  normalizeFloat,
} = require("./calculator.js");

function runTest(name, fn) {
  try {
    fn();
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.error(`FAIL: ${name}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

runTest("add handles floating-point operands", () => {
  assert.equal(add(12.5, 3.75), 16.25);
});

runTest("subtract handles floating-point operands", () => {
  assert.equal(subtract(10.5, 2.25), 8.25);
});

runTest("multiply handles floating-point operands", () => {
  assert.equal(multiply(2.5, 4.2), 10.5);
});

runTest("divide handles floating-point operands", () => {
  assert.equal(divide(7.5, 2.5), 3);
});

runTest("divide returns an error string when dividing by zero", () => {
  assert.equal(divide(5.5, 0), "ERROR - Cannot Divide by 0");
});

runTest("normalizeFloat removes common floating-point noise", () => {
  assert.equal(normalizeFloat(0.1 + 0.2), 0.3);
});
