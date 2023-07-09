const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (array) {
  let product = 1;
  array.forEach((element) => {
    product *= element;
  });
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let result = 1;
  for (i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
