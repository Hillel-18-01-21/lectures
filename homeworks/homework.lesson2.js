const firstOperand = +prompt("Please, enter the first number", "");
const secondOperand = +prompt("Please, enter the second number", "");


// Option 1
// let operationsResult = "Calculations are finished!\n";

// const sum = firstOperand + secondOperand;
// operationsResult += "Sum: " + firstOperand + " + " + secondOperand + " = " + firstOperand + secondOperand + "\n";

// const diff = firstOperand - secondOperand;
// operationsResult += "Diff: " + firstOperand + " - " + secondOperand + " = " + diff + "\n";

// const mult = firstOperand * secondOperand;
// operationsResult += "Mult: " + firstOperand + " * " + secondOperand + " = " + mult + "\n";

// const div = firstOperand / secondOperand;
// operationsResult += "Div: " + firstOperand + " / " + secondOperand + " = " + div;

// console.log(operationsResult);
// alert(operationsResult);

// Option 2
const result = `
Calculations are finished!
Sum: $ {firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}
Diff: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}
Mult: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}
Div: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}
`;

console.log(result);
alert(result);