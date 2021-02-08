let firstNum,secondNum,plusResult,minusResult,multiplicationResult,divisionResult;

firstNum = +prompt("Please, Enter your first number?");

secondNum = +prompt("Please, Enter your second number?");

plusResult = firstNum + secondNum;

minusResult = firstNum - secondNum;

multiplicationResult = firstNum * secondNum;

divisionResult = firstNum / secondNum;

let text = `Calculations are finished!\r
Sum: ${firstNum} + ${secondNum} = ${plusResult}\r
Diff: ${firstNum} - ${secondNum} = ${minusResult}\r
Mult: ${firstNum} * ${secondNum} = ${multiplicationResult}\r
Div: ${firstNum} / ${secondNum} = ${divisionResult}\r `;

alert(text);

console.log(text);