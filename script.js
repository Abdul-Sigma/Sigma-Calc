/*
 * Sigma-Calc JavaScript
 * Created by Abdul Ahmed
 * This script controls the interactive behavior of Sigma-Calc.
 */

let memory = 0; // Memory storage for calculations
let isDarkMode = true; // Track dark mode state

// Append a value to the calculator display
function appendToDisplay(value) {
    const output = document.getElementById("output");
    if (output.innerText === "0") {
        output.innerText = value;
    } else {
        output.innerText += value;
    }
}

// Clear the calculator display
function clearDisplay() {
    document.getElementById("output").innerText = "0";
}

// Perform calculations based on the current display content
function calculate() {
    const output = document.getElementById("output");
    try {
        output.innerText = eval(output.innerText.replace("×", "*").replace("÷", "/"));
    } catch {
        output.innerText = "Error";
    }
}

// Toggle scientific functions visibility
document.getElementById("toggle-scientific").addEventListener("click", () => {
    const scientificFunctions = document.getElementById("scientific-functions");
    const toggleButton = document.getElementById("toggle-scientific");
    if (scientificFunctions.classList.contains("hidden")) {
        scientificFunctions.classList.remove("hidden");
        toggleButton.innerText = "Basic Mode";
    } else {
        scientificFunctions.classList.add("hidden");
        toggleButton.innerText = "Scientific Mode";
    }
});

// Handle scientific calculations
function scientificFunction(func) {
    const output = document.getElementById("output");
    let value = parseFloat(output.innerText);

    if (isNaN(value)) {
        output.innerText = "Error";
        return;
    }

    switch (func) {
        case "sin":
            output.innerText = Math.sin(value).toFixed(10);
            break;
        case "cos":
            output.innerText = Math.cos(value).toFixed(10);
            break;
        case "tan":
            output.innerText = Math.tan(value).toFixed(10);
            break;
        case "sqrt":
            output.innerText = Math.sqrt(value).toFixed(10);
            break;
        case "log":
            output.innerText = Math.log10(value).toFixed(10);
            break;
        case "exp":
            output.innerText = Math.exp(value).toFixed(10);
            break;
        default:
            output.innerText = "Error";
    }
}

// Toggle between dark and light mode
document.getElementById("toggle-theme").addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.style.setProperty("--background-color", isDarkMode ? "#121212" : "#ffffff");
    document.body.style.setProperty("--text-color", isDarkMode ? "#ffffff" : "#000000");
    document.body.style.setProperty("--calculator-bg", isDarkMode ? "#1e1e1e" : "#f5f5f5");
    document.getElementById("toggle-theme").innerText = isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode";
});
