// function declaration
function calcAddition(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(calcAddition(234, 456, 786));

// function expression
const calcSub = function (num1, num2, num3) {
  return num1 - num2 - num3;
};
console.log(calcSub(234, 456, 786));

// arrow functions

const calcMul = (num1, num2, num3) => num1 * num2 * num3;
console.log(calcMul(234, 456, 786));
// function calling another function
function calcAvg(num1, num2, num3) {
  return num1 + num2 + num3;
}

function calPer(num1, num2, num3) {
  let avg = calcAvg(num1, num2, num3);
  return (per = (avg / 300) * 100);
}
for (i = 0; i, 10; i++) {
  console.log(i);
}
console.log(calPer(80, 80, 80));
