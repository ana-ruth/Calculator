function add(num1, num2){ return num1 + num2;}

function subtract(num1, num2){ return num1 - num2;}

function multiply(num1, num2){ return num1 * num2;}

function divide(num1, num2){ return num1 / num2;}

let firstNum, secondNum;
let operator = [];

function operate(num1, operator, num2){
    let result;
    switch(operator)
    {
        case "+":
            result = add(num1,num2);
            break;

        case "-":
            result = subtract(num1,num2);
            break;

        case "*":
            result = multiply(num1,num2);
            break;

        case "/":
            result = divide(num1,num2);
            break;
    }
    return result;
}

function display()
{
    let displayValue = " ";
    const buttons = document.querySelectorAll('.clicked');

    buttons.forEach(button => {
        button.addEventListener('click', function()
        {
            if(button.textContent == '+') {operator.push('+');}
            if(button.textContent == '-') {operator.push('-');}
            if(button.textContent == '*') {operator.push('*');}
            if(button.textContent == '/') {operator.push('/');}
                
            const currentNum = this.textContent;
            displayValue += currentNum;
            document.querySelector(".display").textContent = displayValue;
        });
    });

    const equalSign =  document.querySelector('.showResult');
    equalSign.addEventListener('click',function()
    {        
        displayValue =  getNumbers(displayValue);
        document.querySelector(".display").textContent = displayValue;


        if(operator.length > 1)
        {
            operator.shift();
            displayValue += operator[0];
            document.querySelector(".display").textContent = displayValue;
        }

    });
    

}

display();
clearDisplay();

function getNumbers(displayValue)
{
    let nums = displayValue.split(/[+/*-]/);
    firstNum = Number(nums[0]);
    secondNum = Number(nums[1]);

    return operate(firstNum,operator[0],secondNum);
}

function clearDisplay()
{
    const clear =  document.querySelector('.clear');
    clear.addEventListener('click',function()
    {        
        displayValue =  " ";
        document.querySelector('.display').textContent = displayValue;
        firstNum = 0;
        secondNum = 0;
        operator = [];
    });

}