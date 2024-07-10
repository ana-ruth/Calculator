function add(num1, num2){ return num1 + num2;}

function subtract(num1, num2){ return num1 - num2;}

function multiply(num1, num2){ return num1 * num2;}

function divide(num1, num2){ return num1 / num2;}

let firstNum, secondNum, operator;

function operate(num1, operator, num2){
    let result;
    switch(operator)
    {
        case "addition":
            result = add(num1,num2);
            break;

        case "subtraction":
            result = subtract(num1,num2);
            break;

        case "multiplication":
            result = multiply(num1,num2);
            break;

        case "division":
            result = divide(num1,num2);
            break;
    }
    return result;
}







