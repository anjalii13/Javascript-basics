let marksArray = [];

// ADD MARKS
function addMarks() {
    const input = document.getElementById("inputAssignMarks");
    const value = parseFloat(input.value);

    // validation
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    marksArray.push(value);

    // clear input
    input.value = "";

    displayMarks();
}

// DISPLAY MARKS
function displayMarks() {
    const resultDiv = document.getElementById("resultMarks");

    resultDiv.innerHTML = `
        <p><strong>Marks:</strong> ${marksArray.join(", ")}</p>
    `;
}

// CALCULATE
function calculate() {
    if (marksArray.length === 0) {
        alert("No marks added");
        return;
    }

    let total = 0;
    let highest = marksArray[0];
    let lowest = marksArray[0];

    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];

        if (marksArray[i] > highest) {
            highest = marksArray[i];
        }

        if (marksArray[i] < lowest) {
            lowest = marksArray[i];
        }
    }

    const average = total / marksArray.length;

    const resultDiv = document.getElementById("resultMarks");

    resultDiv.innerHTML = `
        <p><strong>Marks:</strong> ${marksArray.join(", ")}</p>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Highest:</strong> ${highest}</p>
        <p><strong>Lowest:</strong> ${lowest}</p>
    `;
}

// RESET
function reset() {
    marksArray = [];

    document.getElementById("resultMarks").innerHTML = "";

    document.getElementById("inputAssignMarks").value = "";
}