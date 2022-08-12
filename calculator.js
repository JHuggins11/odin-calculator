const container = document.querySelector("#container");
const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#calc-display");
const operatorKeys = document.querySelectorAll(".operator-button");
const numberKeys = document.querySelectorAll(".number-button");
const clearKey = document.querySelector("#clear");
const equalsKey = document.querySelector("#equals");
const decimalPointKey = document.querySelector("#decimal-point");
let displayVal;

// Populate calculator display when number keys are pressed
numberKeys.forEach((key) => {    
    key.addEventListener("click", () => {
        displayVal = calcDisplay.textContent;

        if (displayVal === "0") {
            calcDisplay.textContent = key.textContent;
        }
        else {
            calcDisplay.textContent += key.textContent;
        }        
    });
});

clearKey.addEventListener("click", initialiseDisplay);

// Clear display and set the value to 0
function initialiseDisplay() {
    calcDisplay.textContent = 0;
    displayVal = calcDisplay.textContent;
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

function operate(num1, num2, operator) {
    switch (operator) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    }
}

initialiseDisplay();