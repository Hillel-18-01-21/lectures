alert('Hello');
let workingFlag;
let history = [];



do {
    const result = doCalculation();
    if (result) {
        history.push(result);
        alert(`Result is ${result.operationResult}`);
    }
    workingFlag = confirm('Do you want to do some other operation?');
} while (workingFlag);

/* --- Functions --- */

function doCalculation() {
    const operation = requestOperation();
    if (operation === 'history') {
        const formattedHistory = formatHistory(history);
        console.log(formattedHistory);
        alert(formattedHistory);
        return;
    }

    let secondOperand;

    const firstOperand = requestNumber('Insert a number: ');

    let result = {
        operation: operation,
        operands: [firstOperand]
    };

    // Ask the second operand
    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
            secondOperand = requestNumber('Insert the second one: ');
            result.operands.push(secondOperand);
            break;
    }

    let operationResult;
    switch (operation) {
        case '+':
            operationResult = sum(firstOperand, secondOperand);
            break;
        case '-':
            operationResult = diff(firstOperand, secondOperand);
            break;
        case '*':
            operationResult = mult(firstOperand, secondOperand);
            break;
        case '/':
            operationResult = div(firstOperand, secondOperand);
            break;
        case 'sin':
            operationResult = Math.sin(firstOperand);
            break;
    }

    if (operation == '+') {

    } else if (operation == '-') {

    }

    result.operationResult = operationResult;
    return result;
}

// TODO: implement this one for displaying operations history
function formatHistory(list) {
    let formatResult = '';
    for (let i = 0; i < list.length; i++) {
        formatResult += `${i + 1}. Operation ${list[i].operation},
            operands ${list[i].operands},
            result ${list[i].operationResult} \n`;
    }
    return formatResult;
}

function requestOperation() {
    let operation;
    while (!operation) {
        let response = prompt('Select an operation (+,-,*,/,sin,history):');
        switch (response) {
            case '+':
            case '-':
            case '*':
            case '/':
            case 'sin':
            case 'history':
                operation = response;
                break;
        }
    }
    return operation;
}

function requestNumber(message) {
    let result;
    do {
        result = +prompt(message);
    } while (result != result);
    return result;
}

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
