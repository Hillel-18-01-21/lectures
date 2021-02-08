/* Main logic */

const firstOperand = +prompt("Please, enter the first number", "");
const secondOperand = +prompt("Please, enter the second number", "");

const result = `
Calculations are finished!
Sin: ${firstOperand} = ${Math.sin(firstOperand)}
Diff: ${firstOperand} - ${secondOperand} = ${diff(firstOperand, secondOperand)}
Mult: ${firstOperand} * ${secondOperand} = ${mult(firstOperand, secondOperand)}
Div: ${firstOperand} / ${secondOperand} = ${div(firstOperand, secondOperand)}
`;

console.log(result);
alert(result);

/* Math functions */

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}