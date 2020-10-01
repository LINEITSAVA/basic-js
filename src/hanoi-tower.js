const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   var localTurns = Math.pow(2, disksNumber) - 1;
   var localSeconds = Math.floor(localTurns/turnsSpeed*3600);
   let hanoi  = {
  turns: localTurns,
  seconds: localSeconds
};
  return hanoi;
   };
