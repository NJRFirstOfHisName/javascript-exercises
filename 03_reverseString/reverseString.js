const reverseString = function (inputString) {
  outputString = "";
  for (i = 0; i <= inputString.length; i++) {
    outputString += inputString.substr(inputString.length - i, 1);
  }
  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
