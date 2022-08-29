const container = document.querySelector("#container");
const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#calc-display");
const operatorKeys = document.querySelectorAll(".operator-button");
const numberKeys = document.querySelectorAll(".number-button");
const clearKey = document.querySelector("#clear");
const equalsKey = document.querySelector("#equals");
const decimalPointKey = document.querySelector("#decimal-point");
let expr = []; // array containing expression: index 0 = first value, index 1 = operator, index 2 = second value
let total;

// Populate calculator display when number keys are pressed
numberKeys.forEach((key) => {
    key.addEventListener("click", () => {
        const displayVal = calcDisplay.textContent;

        if (displayVal === "0" || displayVal === "+" || displayVal === "-" 
            || displayVal === "x" || displayVal === "÷") {
            calcDisplay.textContent = key.textContent;
        }
        else {
            calcDisplay.textContent += key.textContent;
        }        
    });
});

// Store first operand and selected operator in expr array after an operator key is pressed
operatorKeys.forEach((key) => {
    key.addEventListener("click", () => {
        expr[0] = calcDisplay.textContent;
        console.log(`First value: ${expr[0]}`);
        expr[1] = key.id;
        calcDisplay.textContent = key.textContent;
    });
});

// Store second operand in expr array and execute calculation, storing the result 
equalsKey.addEventListener("click", () => {
    expr[2] = calcDisplay.textContent; // second value

    // Parse string numbers as integers
    expr[0] = parseInt(expr[0]);
    expr[2] = parseInt(expr[2]);

    // Show error message if the calculation will divide by 0
    if ((expr[1] === "divide") && (expr[2] === 0)) {
        alert("Error: Cannot divide by 0. The calculator has been reset.");
        initialiseDisplay();
    }
    else {
        total = operate(expr[0], expr[1], expr[2]);
        calcDisplay.textContent = total;
    }
});

clearKey.addEventListener("click", initialiseDisplay);

// Clear display, set value to 0 and reset total
function initialiseDisplay() {
    calcDisplay.textContent = 0;
    total = 0;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

initialiseDisplay();