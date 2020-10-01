const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  var result = 0;
  for (var i = 0; i <= backyard.length - 1; i++) {
    var countCats = backyard[i].filter(item => item === '^^');
    var localResult = countCats.length;
    result += localResult;
  }
  return result;
}
