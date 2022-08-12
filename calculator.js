const container = document.querySelector("#container");
const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#calc-display");
const operatorKeys = document.querySelectorAll(".operator-button");
const numberKeys = document.querySelectorAll(".number-button");
const clearKey = document.querySelector("#clear");
const equalsKey = document.querySelector("#equals");
const decimalPointKey = document.querySelector("#decimal-point");

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

// Store values and run selected operation when equals key is pressed
operatorKeys.forEach((key) => {
    let firstVal = calcDisplay.textContent;
    let operator, secondVal;

    key.addEventListener("click", () => {
        if ((operator !== null) && (key === equalsKey)) {
            secondVal = calcDisplay.textContent;
            calcDisplay.textContent = operate(firstVal, secondVal, operator);
        }
        else {
            operator = key.id;
            calcDisplay.textContent = key.textContent;
        }
    });
});

clearKey.addEventListener("click", initialiseDisplay);

// Clear display and set value to 0
function initialiseDisplay() {
    calcDisplay.textContent = 0;
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