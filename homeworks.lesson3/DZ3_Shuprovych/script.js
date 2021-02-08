alert("Привет");
const firstNumber = +prompt("Введите, пожалуйста, первое число");
const secondNumber = +prompt("Введите, пожалуйста, второе число");
function result (a, b) {
    const operation = `
    Calculations are finished!
    Sum: ${a} + ${b} = ${a + b}
    Diff: ${a} - ${b} = ${a - b}
    Mult: ${a} * ${b} = ${a * b}
    Div: ${a} / ${b} = ${a / b}
    `
    return operation;
}
console.log(result(firstNumber, secondNumber));
alert(result(firstNumber, secondNumber));

