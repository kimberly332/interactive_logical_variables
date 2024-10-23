console.log("fired");

let A = true; 
let B = true;
const resultElement = document.getElementById("result-value");
const tableBodyElement = document.getElementById("table-body");

function setA(value) {
    A = value;
    displaySettingValues(A, B);
}

function setB(value) {
    B = value;
    displaySettingValues(A, B);
}

function setInputs() {
    const inputA = document.getElementById("inputA").value;
    const inputB = document.getElementById("inputB").value;

    A = inputA === "1";
    B = inputB === "1";

    displaySettingValues(A, B);
    resultElement.innerHTML = "";
}

function displaySettingValues(valueA, valueB) {
    const displayElementA = document.getElementById("display-inputA");
    const displayElementB = document.getElementById("display-inputB");
    displayElementA.innerHTML = `A is ${valueA}`;
    displayElementB.innerHTML = `B is ${valueB}`;
}

function generateRow() {
    // Calculate
    const result1 = A && B;
    const result2 = A || B;
    const result3 = A && !B;
    const result4 = A || !B;
    const result5 = (A || B) && !(A && B);
    const result6 = (A && B) || !(A || B);
    
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
    tableBodyElement.innerHTML += rowValue;
}

function generateTableData(data) {
    return "<td>" + data + "</td>";
}

// Initialize output
displaySettingValues(A, B);