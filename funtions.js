// const firstOperand = +prompt("Please, enter the first number", "");
// const secondOperand = +prompt("Please, enter the second number", "");

// const sumResult = sum(firstOperand, secondOperand);
// console.log(sumResult);

// function sum(a, b) {
//     const result = a + b;
//     return result;
// }

const mathFunction = function(a, b, operation) {
    return operation(a, b);
};

const result1 = mathFunction(1, 2, sum);
const result2 = mathFunction(1, 2, diff);

console.log(result1);
console.log(result2);