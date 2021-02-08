let x = prompt ( 'Enter the first number');
let y = prompt ( 'Enter the second number');

x=Number(x);
y=Number(y);

const sum =x + y;
const diff =x - y;
const mult = x * y;
const div = x / y;

alert  ('Sum: '+ (x) + ' + ' + (y) + ' = ' + (sum) + '\nDiff: '+ (x) + ' - ' + (y) + ' = ' + (diff) +'\nMult: '+ (x) + ' * ' + (y) + ' = ' + (mult) + '\nDiv: '+ (x) + ' / ' + (y) + ' = ' + (div));

console.log ((sum));
console.log ((diff));
console.log ((mult));
console.log ((div));