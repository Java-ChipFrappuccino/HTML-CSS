// exports.perfectScore = 100;

// exports.sum = (num1, num2) => num1 + num2;
// exports.avg = (num1, num2) => (num1 + num2) / 2;
// exports.subtract = (num1, num2) => num1 - num2;

const perfectScore = 100;

const sum = (num1, num2) => num1 + num2;
const avg = (num1, num2) => sum(num1, num2) / 2;
const subtract = (num1, num2) => num1 - num2;

module.exports = {
  perfectScore,
  sum,
  avg,
  subtract,
};
