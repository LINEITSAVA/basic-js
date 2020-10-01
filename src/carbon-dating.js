const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }


  if (isNaN(sampleActivity)) {
    return false;
  }
  if (isFinite(sampleActivity)) {
    return false;
  }


  var equationK = 0.693 / HALF_LIFE_PERIOD;
  var t = Math.floor((MODERN_ACTIVITY / sampleActivity) / equationK);
  return t;
};
