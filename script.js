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

function performOperation(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+":
            return +add(num1, num2).toFixed(2);
        case "-":
            return +subtract(num1, num2).toFixed(2);
        case "*":
            return +multiply(num1, num2).toFixed(2);
        case "/":
            return +divide(num1, num2).toFixed(2);
    }
}

// Listen for number button clicks and update display accordingly

let num = "";
let operationArray = [];

let display = document.getElementById("display");

let numButtons = document.querySelectorAll(".number");

numButtons.forEach(button => button.addEventListener("click", storeNum));

function storeNum() {
    if (operationArray.length == 1) {
        operationArray = [];
        num += this.textContent;
        display.textContent = this.textContent;
    }
    else {
        display.textContent += this.textContent;
        num += this.textContent;
    }
}

// Listen for operator clicks and store number and operator 

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", storeOperator));

function storeOperator() {
    display.textContent += this.textContent;
    if(operationArray.length != 1) {
        operationArray.push(num); // Store number entered before, then clear variable for later use
        num = "";
    }
    operationArray.push(this.textContent); // Store operator that was pressed
}

// Listen for equal sign, store number, and operate

let equal = document.getElementById("equal");
equal.addEventListener("click", operate);

function operate() {
    operationArray.push(num); // Store number entered before, then clear variable for later use
    num = "";

    while (operationArray.length >= 3) {
        let solution = performOperation(operationArray[0], operationArray[1], operationArray[2]);
        if (solution == "Infinity") {
            display.textContent = "Diving by 0 huh?";
            return;
        }
        operationArray.splice(0, 3);
        operationArray.splice(0, 0, solution);
    }

    display.textContent = operationArray[0];
}

// Listen for clear button and clear all content

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

function clear() {
    display.textContent = "";
    operationArray = [];
    num = "";
}

//

let decimal = document.getElementById("decimal");
decimal.addEventListener("click", storeDecimal);

function storeDecimal() {
    if (operationArray.length != 1 && !num.includes(".")) {
        num += this.textContent;
        display.textContent += this.textContent;
    }
}