let namesArray = [];

// ADD NAME
function addName() {
    const input = document.getElementById("nameInput");
    const value = input.value.trim();

    if (value === "") {
        alert("Enter a name");
        return;
    }

    namesArray.push(value);

    input.value = "";

    displayNames();
}

// DISPLAY NAMES
function displayNames() {
    const result = document.getElementById("result");

    result.innerHTML = `
        <p><strong>Names:</strong> ${namesArray.join(", ")}</p>
    `;
}

// SORT NAMES
function sortNames() {
    namesArray.sort(); // A → Z

    displayNames();
}

// RESET
function resetNames() {
    namesArray = [];

    document.getElementById("result").innerHTML = "";
    document.getElementById("nameInput").value = "";
}