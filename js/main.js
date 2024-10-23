console.log("fired");

let A = true; 
let B = true;
const resultElement = document.getElementById("result-value");

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
    displayElementA.innerHTML = "A is " + valueA;
    displayElementB.innerHTML = "B is " + valueB;
}

function displayAND() {
    resultElement.innerHTML = "A AND B is " + (A && B);
}

function displayOR() {
    resultElement.innerHTML = "A OR B is " + (A || B);
}

function displayNOTA() {
    resultElement.innerHTML = "NOT A is " + !A;
}

function displayNOTB() {
    resultElement.innerHTML = "NOT B is " + !B;
}

// Initialize output
displaySettingValues(A, B);