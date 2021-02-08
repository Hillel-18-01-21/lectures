alert("Привет");
const firstNumber = prompt("Введите, пожалуйста, первое число");
const secondNumber = prompt("Введите, пожалуйста, второе число");
const result = {
    Sum: (firstNumber +" + "+ secondNumber) + " = " + (Number(firstNumber) + Number(secondNumber)),
    Diff: (firstNumber +" - "+ secondNumber) + " = " + (Number(firstNumber) - Number(secondNumber)),
    Mult: (firstNumber +" * "+ secondNumber) + " = " + (Number(firstNumber) * Number(secondNumber)),
    Div: (firstNumber +" / "+ secondNumber) + " = " + (Number(firstNumber) / Number(secondNumber))
};
console.log(" Calculations are finished!", "\n Sum:" + result.Sum,  "\n Diff:" + result.Diff,  "\n Mult:" + result.Mult,  "\n Div:" + result.Div);
alert("Сумма:" + result.Sum,"\n Разница:" + result.Diff,"\n Произведение:" + result.Mult,"\n Частное:" + result.Div);

 
