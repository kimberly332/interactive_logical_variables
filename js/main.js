console.log("fired");

// Initialize variables for logical operations
let A = true; 
let B = true;
const resultElement = document.getElementById("result-value");
const tableBodyElement = document.getElementById("table-body");

// Sets the value of variable A and updates the display
function setA(value) {
    A = value;
    displaySettingValues(A, B);
}

// Sets the value of variable B and updates the display
function setB(value) {
    B = value;
    displaySettingValues(A, B);
}

// Converts input values of "1" to true and any other value to false
function setInputs() {
    const inputA = document.getElementById("inputA").value;
    const inputB = document.getElementById("inputB").value;

    A = inputA === "1";
    B = inputB === "1";

    displaySettingValues(A, B);
    resultElement.innerHTML = "";
}

// Updates the display to show current values of A and B
function displaySettingValues(valueA, valueB) {
    const displayElementA = document.getElementById("display-inputA");
    const displayElementB = document.getElementById("display-inputB");
    displayElementA.innerHTML = `A is ${valueA}`;
    displayElementB.innerHTML = `B is ${valueB}`;
}

// Generates a new row in the truth table based on current A and B values
function generateRow() {
    // Calculate
    const result1 = A && B;
    const result2 = A || B;
    const result3 = A && !B;
    const result4 = A || !B;
    const result5 = (A || B) && !(A && B);
    const result6 = (A && B) || !(A || B);
    
    // Create HTML row string using table data generator
    const rowValue = "<tr>" + 
        generateTableData(A) + 
        generateTableData(B) + 
        generateTableData(result1) + 
        generateTableData(result2) + 
        generateTableData(result3) + 
        generateTableData(result4) + 
        generateTableData(result5) +
        generateTableData(result6) + 
        "</tr>";
    
    // Append new row to table body
    tableBodyElement.innerHTML += rowValue;
}

// Generates HTML table
function generateTableData(data) {
    return "<td>" + data + "</td>";
}

// Initialize output
displaySettingValues(A, B);