function add(num1, num2) {
    return num1 + num2;
}
  
function subtract (num1, num2) {
    return num1 - num2;
}
  
function multiply (num1, num2) { 
    return num1 * num2;
}

function divide (num1, num2) { 
    return num1 / num2;
}

function operate(num1, operator, num2) { 
    if (operator == "+") { 
        return add(num1, num2);
    } else if (operator == "-") { 
        return subtract(num1, num2);
    } else if (operator == "*") { 
        return multiply(num1, num2);
    } else if (operator == "/") { 
        return divide(num1, num2);
    }
}




const buttons = document.querySelectorAll(".button-container button")

const display = document.querySelector(".display-text");

let userInput = "";

buttons.forEach((button) => {

    if (button.matches('.num-0, .num-1, .num-2, .num-3, .num-4, .num-5, .num-6, .num-7, .num-8, .num-9')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
            userInput += button.textContent;
        });
    }

    if (button.matches('.divide')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            userInput += " / ";
        });
    }
    
    if (button.matches('.multiply')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            userInput += " * ";
        });
    }

    if (button.matches('.plus')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            userInput += " + ";
        });
    }

    if (button.matches('.minus')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            userInput += " - ";
        });
    }

    if (button.matches('.equals')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            
            const parts = userInput.split(" ");

            const num1 = parseInt(parts[0], 10); // Convert the first part to an integer
            const operator = parts[1]; // Get the operator
            const num2 = parseInt(parts[2], 10); // Convert the second part to an integer

            if (operator == "/" && num2 == 0) { 
                display.textContent = "Hmm... \u{1F928}";
                userInput = "";

            } else {
                result = operate(num1, operator, num2).toFixed(2);
                display.textContent = result;
                userInput = result;

            }


        });
    } 

    if (button.matches('.ce')) {
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            userInput = "";
            display.textContent = "";
        });
    }



});

// const userInput = prompt("Enter operation: ")
