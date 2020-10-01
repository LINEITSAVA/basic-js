const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('THROWN');
  }

  if (arr === undefined) {
    return arr;
  }
  var newArr = arr.slice();

  if (newArr.length === 1 && newArr[0] === undefined) {
    return newArr;
  }

  if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
    newArr[0] = "bornToBeDead";
  } else if (newArr[0] === '--double-next') {
    newArr[0] = newArr[1];
  } else if (newArr[0] === '--discard-next') {
    newArr[1] = "bornToBeDead";
    newArr[0] = "bornToBeDead";

  }

  if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--double-next') {
    newArr[newArr.length - 1] = "bornToBeDead";
  } else if (newArr[newArr.length - 1] === '--discard-prev') {
    newArr[newArr.length - 2] = "bornToBeDead";
    newArr[newArr.length - 1] = "bornToBeDead";
  } else if (newArr[newArr.length - 1] === '--double-prev') {
    newArr[newArr.length - 1] = newArr[newArr.length - 2];
  }

  for (var i = 1; i <= newArr.length - 2; i++) {
    if (newArr[i] === "--discard-next") {
      newArr[i + 1] = 'bornToBeDead';
      newArr[i] = 'bornToBeDead';
    } else if (newArr[i] === "--discard-prev") {
      newArr[i - 1] = 'bornToBeDead';
      newArr[i] = 'bornToBeDead';
    } else if (newArr[i] === "--double-next") {
      newArr[i] = newArr[i + 1];
    } else if (newArr[i] === "--double-prev") {
      newArr[i] = newArr[i - 1];
    }

  }
  var finalArr = newArr.filter((item) => item !== "bornToBeDead");
  return finalArr;
};
