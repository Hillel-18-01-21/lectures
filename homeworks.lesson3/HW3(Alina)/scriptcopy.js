const x = +prompt ( 'Enter the first number');
const y = +prompt ( 'Enter the second number');

const secondVer =function (x,y, operation) {
    switch (operation) {
        case sum:
            return x+y;
            break;
        case diff:
            return x-y;
            break;
        case mult:
            return x*y;
            break;
        case div:
            return x/y;
            break;
    }
}

const totalSum = secondVer (x, y, sum );
const totalDiff = secondVer (x, y,diff );
const totalMult = secondVer (x, y,mult );
const totalDiv = secondVer (x, y, div );

const result = `
Calculations are finished!
Sum: ${x} + ${y} = ${totalSum};
Diff: ${x} - ${y} = ${totalDiff};
Mult: ${x} * ${y} = ${totalMult};
Div: ${x} / ${y} = ${totalDiv};
`;

alert  (result);
console.log (result);

// const sum = function (x,y) {
//     return x+y;
// };

// const diff = function (x,y) {
//     return x-y;
// };

// const mult = function (x,y) {
//     return x*y;
// };

// const div = function (x,y) {
//     return x/y;
// };

// const mathFunction= function(x,y,operation) {
//     return operation (x,y);
// };

