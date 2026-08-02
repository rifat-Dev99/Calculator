const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

// Display update function
function updateDisplay() {
    display.innerText = firstNumber + operator + secondNumber;
}

// Reset all
function resetCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
    display.innerText = "0";
}

// Delete last character
function deleteLast() {
    if (!isSecondNumber) {
        firstNumber = firstNumber.slice(0, -1);
    } else {
        if (secondNumber !== "") {
            secondNumber = secondNumber.slice(0, -1);
        } else {
            operator = "";
            isSecondNumber = false;
        }
    }

    updateDisplay();

    if (display.innerText === "") {
        display.innerText = "0";
    }
}

// Calculate result
function calculate() {
    if (firstNumber === "" || secondNumber === "" || operator === "") {
        return;
    }

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 === 0 ? "Error" : num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }

    display.innerText = result;

    // Result becomes the new first number
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
}

// Handle all button clicks
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        // Number or decimal
        if (!isNaN(value) || value === ".") {
            if (!isSecondNumber) {
                // Prevent multiple dots
                if (value === "." && firstNumber.includes(".")) return;

                firstNumber += value;
            } else {
                if (value === "." && secondNumber.includes(".")) return;

                secondNumber += value;
            }

            updateDisplay();
            return;
        }

        // Operators
        if (["+", "-", "*", "/", "%"].includes(value)) {
            if (firstNumber === "") return;

            // If already have second number, calculate first
            if (secondNumber !== "") {
                calculate();
            }

            operator = value;
            isSecondNumber = true;
            updateDisplay();
            return;
        }

        // Equal
        if (value === "=") {
            calculate();
            return;
        }

        // AC
        if (value === "AC") {
            resetCalculator();
            return;
        }

        // DEL
        if (value === "DEL") {
            deleteLast();
            return;
        }
    });
});

// Initial display
display.innerText = "0";










//USE EVAL FUNCTION TO CALCULATE THE RESULT OF THE EXPRESSION

// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll(".buttons button");

// let expression = "";

// buttons.forEach(btn => {

//     btn.addEventListener("click", () => {

//         const value = btn.innerText;

//         // AC
//         if (value === "AC") {
//             expression = "";
//             display.innerText = "";
//             return;
//         }

//         // DEL
//         if (value === "DEL") {
//             expression = expression.slice(0, -1);
//             display.innerText = expression;
//             return;
//         }

//         // Equal
//         if (value === "=") {

//             try {
//                 const result = eval(expression);

//                 display.innerText = result;

//                 expression = result.toString();
//             }
//             catch {
//                 display.innerText = "Error";
//                 expression = "";
//             }

//             return;
//         }

//         // Normal buttons
//         expression += value;
//         display.innerText = expression;

//     });

// });




















