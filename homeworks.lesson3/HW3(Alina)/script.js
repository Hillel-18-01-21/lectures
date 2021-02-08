const x = +prompt ( 'Enter the first number');
const y = +prompt ( 'Enter the second number');

const sum = function (x,y) {
    return x+y;
};

const diff = function (x,y) {
    return x-y;
};

const mult = function (x,y) {
    return x*y;
};

const div = function (x,y) {
    return x/y;
};

const mathFunction= function(x,y,operation) {
    return operation (x,y);
};

const totalSum = mathFunction (x, y, sum);
const totalDiff = mathFunction (x, y, diff);
const totalMult = mathFunction (x, y, mult);
const totalDiv = mathFunction (x, y, div);

const result = `
Calculations are finished!
Sum: ${x} + ${y} = ${totalSum};
Diff: ${x} - ${y} = ${totalDiff};
Mult: ${x} * ${y} = ${totalMult};
Div: ${x} / ${y} = ${totalDiv};
`;

alert  (result);
console.log (result);