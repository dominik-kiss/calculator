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

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;                  
    }
}

// Listen for number button clicks and update display accordingly

let numButtons = document.querySelectorAll(".number");

numButtons.forEach(button => button.addEventListener("click", inputNum));

let display = document.getElementById("display");

function inputNum() {
    display.textContent += this.textContent;
}

// Listen for operator clicks and store number and operator 

let operators = document.querySelectorAll(".operator");

operators.forEach(operator => operator.addEventListener("click", storeNum));

let num1 = 0;

function storeNum() {
    num1 = display.textContent;
    display.textContent = this.textContent;
}