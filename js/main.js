console.log("fired");

let A = undefined; 
let B = undefined;
// "-" to be displayed when value is unset. This will happen in intial render.
const initialDisplay = "-"; 

function setA(value) {
    A = value;
    updateOutput(A, B);
}

function setB(value) {
    B = value;
    updateOutput(A, B);
}

function setInputs() {
    const inputA = document.getElementById("inputA").value;
    const inputB = document.getElementById("inputB").value;

    if (inputA) {
        A = inputA === "1";
    }

    if (inputB) {
        B = inputB === "1";
    }

    updateOutput(A, B);
}

function updateOutput(valueA, valueB) {
    const outputElementA = document.getElementById("outputA");
    const outputElementB = document.getElementById("outputB");

    if (valueA === undefined) {
        outputElementA.innerHTML = "A: " + initialDisplay;
    } else {
        outputElementA.innerHTML = "A: " + valueA;
    }

    if (valueB === undefined) {
        outputElementB.innerHTML = "B: " + initialDisplay;
    } else {
        outputElementB.innerHTML = "B: " + valueB;
    }
}

// Initialize output
updateOutput(A, B);