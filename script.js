const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const operate = function (operator, x, y) {
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
};
