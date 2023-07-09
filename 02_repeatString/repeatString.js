const repeatString = function (phrase, repeats) {
  let returnString = "";
  if (repeats >= 0) {
    for (i = 0; i < repeats; i++) {
      returnString += phrase;
    }
  } else {
    returnString = "ERROR";
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
