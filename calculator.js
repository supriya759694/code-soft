let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        let expression = result.value;
        let operators = ['+', '-', '*', '/'];
        let currentOperatorIndex = -1;
        
        // Find the index of the operator in the expression
        for (let i = 0; i < operators.length; i++) {
            if (expression.includes(operators[i])) {
                currentOperatorIndex = expression.indexOf(operators[i]);
                break;
            }
        }
        
        // Split the expression into operands based on the operator index
        let operand1 = expression.substring(0, currentOperatorIndex);
        let operand2 = expression.substring(currentOperatorIndex + 1);
        
        // Convert operands to numbers
        let num1 = parseFloat(operand1);
        let num2 = parseFloat(operand2);
        
        // Perform the operation based on the operator
        let operator = expression.charAt(currentOperatorIndex);
        let resultValue;
        
        switch (operator) {
            case '+':
                resultValue = num1 + num2;
                break;
            case '-':
                resultValue = num1 - num2;
                break;
            case '*':
                resultValue = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultValue = num1 / num2;
                } else {
                    throw new Error('Division by zero');
                }
                break;
            default:
                throw new Error('Invalid operator');
        }
        
        result.value = resultValue;
    } catch (error) {
        result.value = 'Error';
    }
}
