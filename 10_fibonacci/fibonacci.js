const fibonacci = function (input) {
  if (input < 0) {
    return "OOPS";
  }
  let a = 0;
  let b = 1;
  for (i = 1; i < input; i++) {
    if (a < b) {
      a += b;
    } else {
      b += a;
    }
  }
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

// Do not edit below this line
module.exports = fibonacci;
