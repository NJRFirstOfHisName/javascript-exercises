const sumAll = function (a, b) {
  let c,
    incrementor = 0;
  for (i = a; (i = b); i++) {
    c += a + incrementor;
    incrementor++;
  }

  return c;
};

// Do not edit below this line
module.exports = sumAll;
