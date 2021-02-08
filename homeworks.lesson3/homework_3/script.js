
let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));

let sumResult;
function sum() {
    let sumResult = firstNumber + secondNumber;
    console.log(String(`Sum: ${firstNumber} + ${secondNumber} = ${sumResult}`));
    alert(String(`Sum: ${firstNumber} + ${secondNumber} = ${sumResult}`))
};
sum();



function diff() {
    let sumResult = firstNumber - secondNumber;
    console.log(String(`Diff: ${firstNumber} - ${secondNumber} = ${sumResult}`));
    alert(String(`Diff: ${firstNumber} - ${secondNumber} = ${sumResult}`))
};
diff();

function multiply() {
    let sumResult = firstNumber * secondNumber;

    console.log(`Mult: ${firstNumber} * ${secondNumber} = ${sumResult}`);

    alert(`Mult: ${firstNumber} * ${secondNumber} = ${sumResult}`);

}
multiply();

function div() {
    let sumResult = firstNumber / secondNumber;
    console.log(`Div: ${firstNumber} / ${secondNumber} = ${sumResult}`);
    alert(`Div: ${firstNumber} / ${secondNumber} = ${sumResult}`)
}
div();