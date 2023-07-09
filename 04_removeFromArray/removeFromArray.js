const removeFromArray = function (arrayNums, ...removeNums) {
  const newArray = [];
  arrayNums.forEach((item) => {
    if (!removeNums.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
