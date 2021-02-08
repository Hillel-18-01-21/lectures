const firstOperand = +prompt ("Please enter the first number!","");
const secondOperand = +prompt ("Please enter the second number!","");

function getsum(firstOperand,secondOperand){
	return firstOperand + secondOperand;
}
function getdiff(firstOperand,secondOperand){
	return firstOperand - secondOperand;
}
function getmult(firstOperand,secondOperand){
	return firstOperand * secondOperand;
}
function getdiv(firstOperand,secondOperand){
	return firstOperand / secondOperand;
}

const operationResult = ` 
Calculations are finished!
Sum :  ${firstOperand}+${secondOperand} = ${getsum(firstOperand,secondOperand)}
Diff : ${firstOperand}-${secondOperand} = ${getdiff(firstOperand,secondOperand)}
Mult : ${firstOperand}*${secondOperand} = ${getmult(firstOperand,secondOperand)}
Div  :  ${firstOperand}/${secondOperand} = ${getdiv(firstOperand,secondOperand)}
`;
alert(operationResult);
console.log(operationResult);