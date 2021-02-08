// запрос 
const firstNumber = +prompt('Hi! Write your first number', );
const secondNumber = +prompt('Write your second number', );
// операци
const sum = function(a,b) {
   return a+b;
};

const diff = function(a,b) {
   return a-b;
};

const mult = function (a,b) {
   return a*b;
};

const div = function (a,b){
   return a/b;
};

const mathFunction = function(a,b,operation) {
   return operation (a,b);
};

//чему будет равно 
const resultSum = mathFunction(firstNumber,secondNumber,sum);
const resultDiff = mathFunction(firstNumber,secondNumber,diff);
const resultMult = mathFunction(firstNumber,secondNumber,mult);
const resultDiv = mathFunction(firstNumber,secondNumber,div);

// модалка
alert(`Calculations are finished!\nSum:${firstNumber}+${secondNumber}=${resultSum}\nDiff:${firstNumber}-${secondNumber}=${resultDiff}\nMult:${firstNumber}*${secondNumber}=${resultMult}\nDiv:${firstNumber}/${secondNumber}=${resultDiv} `);
// консоль
console.log(`Calculations are finished!\nSum:${firstNumber}+${secondNumber}=${resultSum}\nDiff:${firstNumber}-${secondNumber}=${resultDiff}\nMult:${firstNumber}*${secondNumber}=${resultMult}\nDiv:${firstNumber}/${secondNumber}=${resultDiv} `);