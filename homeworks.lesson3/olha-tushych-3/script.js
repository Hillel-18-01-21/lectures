const number1 = +prompt("Enter first number:");

const number2 = +prompt("Enter second number:");

function sum(a, b) {
    const result = a + b;
    return result;
}

function diff(a, b) {
    const result = a - b;
    return result;
}

function mult(a, b) {
    const result = a * b;
    return result;
}

function div(a, b) {
    const result = a / b;
    return result;
}

function calculation(a, b, c) {
    return c(a, b);
}

const result = `
    Calculations are finished!
    Sum: ${number1} + ${number2} = ${calculation(number1, number2, sum)}
    Diff: ${number1} - ${number2} = ${calculation(number1, number2, diff)}
    Mult: ${number1} * ${number2} = ${calculation(number1, number2, mult)}
    Div: ${number1} / ${number2} = ${calculation(number1, number2, div)}
`;

console.log(result);

alert(result);