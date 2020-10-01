const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam;
  let name = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (var i = 0; i <= members.length - 1; i++) {
    if (typeof members[i] == 'string') {
      name.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  nameTeam = name.sort().join('');


  if (nameTeam === "") {
    return false;
  }
  return nameTeam;


};
