alert("Hello, let's count?");

const first = +prompt ("give me any number", "");
const second = +prompt ("give me one more number", "");

const sumResult = sum(first, second);

const diffResult = diff(first, second);

const multResult = mult(first, second);

const divResult = div(first, second);


function sum (a, b) {
   const result = a + b;
   return result;
}

function diff (a, b) {
    const result = a - b;
    return result;
}

function mult (a, b) {
    const result = a * b;
    return result;
}

function div (a, b) {
    const result = a / b;
    return result;
}


let calculations = `So!Calculations are finished!
Sum = ${first} + ${second} = ${sumResult}
Diff = ${first} - ${second} = ${diffResult}
Mult = ${first} * ${second} = ${multResult}
Div = ${first} / ${second} = ${divResult}`;

alert(calculations);
console.log(calculations);