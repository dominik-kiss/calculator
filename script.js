// Functions for the basic math operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Function to decide which basic operation should be called

function performOperation(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);              
    }
}

// Listen for number button clicks and update display accordingly

let newOperation = false;
let num = "";
let operationArray = [];

let display = document.getElementById("display");

let numButtons = document.querySelectorAll(".number");

numButtons.forEach(button => button.addEventListener("click", storeNum));

function storeNum() {
    if (newOperation) clear();

    display.textContent += this.textContent;
    num += this.textContent;
}

// Listen for operator clicks and store number and operator 

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", storeOperator));

function storeOperator() {
    display.textContent += this.textContent;
    operationArray.push(num);
    num = "";
    if (this.textContent == "=") {
        let solution = performOperation(operationArray[1], operationArray[0], operationArray[2]);
        display.textContent = solution;
        newOperation = true;
    }
    else {
        operationArray.push(this.textContent);
    }
}

// Listen for clear button and clear all content

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

function clear() {
    display.textContent = "";
    operationArray = [];
    num = "";
    newOperation = false;
}