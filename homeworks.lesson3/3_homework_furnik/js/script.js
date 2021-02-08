
alert(`Hi, my dear friend! Could you do something for me?`);

const first = +prompt(`Enter the first number (any).`, `0`);
const second = +prompt(`Enter the second number (any).`, `0`);

const sum = function(a, b) {
    return a + b;
}

const diff = function(a, b) {
    return a - b;
}

const mult = function(a, b) {
    return a * b;
}

const div = function(a, b) {
    return a / b;
}

const mathFunction = function(a, b, operation) {
    return operation(a,b)
}

const result = `Calculations are finished!
Sum: ${first} + ${second} = ${mathFunction(first, second, sum)}
Diff: ${first} - ${second} = ${mathFunction(first, second, diff)}
Mult: ${first} * ${second} = ${mathFunction(first, second, mult)}
Div: ${first} / ${second} = ${mathFunction(first, second, div)}`;

console.log(result);

alert(result);