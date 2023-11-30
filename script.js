const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "Hello World!";

body.appendChild(h1);

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
