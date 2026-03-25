// character sets
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

// update length display
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

// generate password
function generatePassword() {

  let chars = "";

  if (document.getElementById("uppercase").checked) chars += upper;
  if (document.getElementById("lowercase").checked) chars += lower;
  if (document.getElementById("numbers").checked) chars += numbers;
  if (document.getElementById("symbols").checked) chars += symbols;

  if (chars === "") {
    alert("Select at least one option");
    return;
  }

  let password = "";
  const length = lengthSlider.value;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("password").value = password;
}

// copy password
function copyPassword() {
  const passwordField = document.getElementById("password");

  passwordField.select();
  document.execCommand("copy");

  alert("Copied!");
}