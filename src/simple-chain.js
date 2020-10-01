const CustomError = require("../extensions/custom-error");

const chainMaker = {
    getLength() {
    chainMaker = chainMaker.split("~~").length;
    return chainMaker;
  },
  addLink(value) {
    chainMaker = chainMaker.split("~~").push(value);
    return chainMaker;
  },
  removeLink(position) {
    chainMaker = chainMaker.split("~~").splice(position,1);
    return chainMaker;
  },
  reverseChain() {
    chainMaker = chainMaker.split("~~").reverse();
    return chainMaker;
  },
  finishChain() {
    chainMaker = chainMaker.split("~~").toString();
    return chainMaker;
  }
};

module.exports = chainMaker;
