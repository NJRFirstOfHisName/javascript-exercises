const palindromes = function (input) {
  input = input.toLowerCase().replace(/[^a-z]/g, "");
  initial = [...input];
  const copy = initial.slice(0);
  initial.reverse();
  console.log(initial);
  console.log(copy);

  for (i = 0; i < initial.length; i++) {
    if (initial[i] != copy[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
