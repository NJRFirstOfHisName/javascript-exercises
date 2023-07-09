const findTheOldest = function (people) {
  let age = 0;
  let index;
  people.forEach((element) => {
    if (!element.yearOfDeath) {
      element["yearOfDeath"] = Date.prototype.getFullYear;
    }
    if (element.yearOfDeath - element.yearOfBirth > age) {
      age = element.yearOfDeath - element.yearOfBirth;
      index = element.name;
    }
  });
  return people.find((person) => person.name === index);
};

// Do not edit below this line
module.exports = findTheOldest;
