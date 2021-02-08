
let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));


function sum() {
    const sumEquation = firstNumber + secondNumber;
    const sumTotal = `Sum: ${firstNumber} + ${secondNumber} = ${sumEquation}`;
    return sumTotal;
};
const sumTotal = sum();



function diff() {
    const diffEquation = firstNumber - secondNumber;
    const diffTotal = `Diff: ${firstNumber} - ${secondNumber} = ${diffEquation}`;
    return diffTotal;

}

const diffTotal = diff();



function mul() {
    const mulEquation = firstNumber * secondNumber;
    const mulTotal = `Mult: ${firstNumber} * ${secondNumber} = ${mulEquation}`;
    return mulTotal;
}
const mulTotal = mul();


function div() {
    const divEquation = firstNumber / secondNumber;
    const divTotal = `Div: ${firstNumber} / ${secondNumber} = ${divEquation}`;
    return divTotal;
}

const divTotal = div();


console.log(`${sumTotal}
${diffTotal}
${mulTotal}
${divTotal}`);
alert(`Вычисление выполнено!
${sumTotal}
${diffTotal}
${mulTotal}
${divTotal}`);