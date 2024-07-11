function add(num1, num2){ return num1 + num2;}

function subtract(num1, num2){ return num1 - num2;}

function multiply(num1, num2){ return num1 * num2;}

function divide(num1, num2) { return num1 / num2;}

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
let displayValue;

function display()
{
    displayValue = " ";
    const buttons = document.querySelectorAll('.clicked');

    buttons.forEach(button => {
        button.addEventListener('click', function()
        {
            if(button.textContent == '+') {
                operator.push('+'); 
                document.getElementById("decimal").disabled = false;
            }
            if(button.textContent == '-') {
                operator.push('-');
                document.getElementById("decimal").disabled = false;
            }
            if(button.textContent == '*') {
                operator.push('*');
                document.getElementById("decimal").disabled = false;
            }
            if(button.textContent == '/') {
                operator.push('/');
                document.getElementById("decimal").disabled = false;
            }
                
            const currentNum = this.textContent;
            displayValue += currentNum;
            document.querySelector(".display").textContent = displayValue;
        });
    });

    const equalSign =  document.querySelector('.showResult');
    equalSign.addEventListener('click',function()
    {        
        displayValue =  getNumbers(displayValue);
        document.getElementById("decimal").disabled = false;


        if(operator.length > 1)
        {
            operator.shift();
            displayValue += operator[0];
            document.querySelector(".display").textContent = displayValue;
        }
        document.getElementById("decimal").disabled = false;

    });
    

}

display();
clearDisplay();

function getNumbers(displayValue)
{
    let nums = displayValue.split(/[+/*-]/);
    firstNum = Number(nums[0]);
    secondNum = Number(nums[1]);

    if(secondNum === 0) { return 'undefined';}

    let result =  operate(firstNum,operator[0],secondNum);

    //answers with long decimals are rounded to prevent result
    if(result == Math.floor(result)) return result;
    else { return result.toFixed(5);}
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
        document.getElementById("decimal").disabled = false;

    });

}

decimal();
function decimal()
{
    const decimal = document.querySelector('#decimal');
    decimal.addEventListener('click',function()
    {
        document.getElementById("decimal").disabled = true;
    });

}