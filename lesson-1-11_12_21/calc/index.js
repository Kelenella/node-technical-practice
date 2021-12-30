// const operations = require("./operations");
// console.log(operations);
// operations.sum();
// operations.sub();
// operations.mult();
// operations.div();

// const { sum, sub, mult, div } = require("./operations");

const actionHandler = require("./actionHandler");
let [operator, ...numbers] = process.argv.slice(2);
let newArrNumber = numbers.map((number) => Number(number));
actionHandler(newArrNumber, operator);
