let myResult = "Calculations are finished! \n"

const number1 = +prompt("Enter first number:");

const number2 = +prompt("Enter second number:");

const mySum = number1 + number2;
myResult = myResult + "Sum: " + number1 + "+" + number2 + "=" + mySum + "\n";

const myDiff = number1 - number2;
myResult = myResult + "Diff: " + number1 + "-" + number2 + "=" + myDiff + "\n";

const myMult = number1 * number2;
myResult = myResult + "Mult: " + number1 + "*" + number2 + "=" + myMult + "\n";

const myDiv = number1 / number2;
myResult = myResult + "Div: " + number1 + "/" + number2 + "=" + myDiv + "\n";

console.log(myResult);

alert(myResult);