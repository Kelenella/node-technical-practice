const { sum, sub, mult, div } = require("./operations");

const actionHandler = (newArrNumber, operator) => {
  switch (operator) {
    case "sum":
      sum(newArrNumber, operator);
      break;
    case "sub":
      sub(newArrNumber, operator);
      break;
    case "mult":
      mult(newArrNumber, operator);
      break;
    case "div":
      div(newArrNumber, operator);
      break;

    default:
      console.log("Error format operation");
  }
};

module.exports = actionHandler;
