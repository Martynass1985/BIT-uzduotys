// DOM elementai už funkcijų ribų
const vardas = document.getElementById("vardas");
const pavarde = document.getElementById("pavarde");
const numeris = document.getElementById("numeris");

const vardasError = document.getElementById("vardasError");
const pavardeError = document.getElementById("pavardeError");
const numerisError = document.getElementById("numerisError");

function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Automatiškai konvertuojame pirmąją raidę į didžiąją
vardas.addEventListener("input", () => {
  vardas.value = capitalizeFirstLetter(vardas.value);
});

pavarde.addEventListener("input", () => {
  pavarde.value = capitalizeFirstLetter(pavarde.value);
});

numeris.addEventListener("input", (event) => {
  let value = event.target.value;
  let sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, "");
  let firstThreeLetters = sanitizedValue.slice(0, 3).toUpperCase();
  if (firstThreeLetters.length === 3 && /^[A-Z]+$/) {
    sanitizedValue = firstThreeLetters + sanitizedValue.slice(3);
  } else {
    sanitizedValue = firstThreeLetters;
  }
  if (sanitizedValue.length > 3) {
    sanitizedValue =
      sanitizedValue.slice(0, 3) +
      "-" +
      sanitizedValue.slice(3, sanitizedValue.length);
  }
  if (sanitizedValue.length > 7) {
    sanitizedValue = sanitizedValue.slice(0, 7);
  }
  event.target.value = sanitizedValue;
});

// Formos validacijos funkcija
function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  if (!validateName(vardas.value)) {
    vardasError.textContent =
      "Vardas turi būti nuo 3 iki 50 simbolių, prasidėti didžiąja raide ir turėti tik raides.";
    isValid = false;
  } else {
    vardasError.textContent = "";
  }
  if (!validateSurname(pavarde.value)) {
    pavardeError.textContent =
      "Pavardė turi būti nuo 3 iki 50 simbolių, prasidėti didžiąja raide ir turėti tik raides.";
    isValid = false;
  } else {
    pavardeError.textContent = "";
  }
  if (!validateNumeris(numeris.value)) {
    numerisError.textContent =
      "Numeris turi būti 7 simbolių ilgio (3 raidės, brūkšnys ir 3 skaičiai).";
    isValid = false;
  } else {
    numerisError.textContent = "";
  }
  if (isValid) {
    alert("Registracija sėkminga!");
    clearInputs();
  }
}

// Vardo ir pavardės validacija
function validateName(n) {
  if (n.length < 3 || n.length > 50) return false;
  if (n[0] !== n[0].toUpperCase()) return false;
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      )
    ) {
      return false;
    }
  }
  return true;
}
function validateSurname(s) {
  if (s.length < 3 || s.length > 50) return false;
  if (s[0] !== s[0].toUpperCase()) return false;
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      )
    ) {
      return false;
    }
  }
  return true;
}

// Numerio validacija
function validateNumeris(num) {
  if (num.length !== 7) return false;
  for (let i = 0; i < 3; i++) {
    const charCode = num.charCodeAt(i);
    if (!(charCode >= 65 && charCode <= 90)) {
      return false;
    }
  }
  if (num.charAt(3) !== "-") {
    return false;
  }
  for (let i = 4; i < 7; i++) {
    const charCode = num.charCodeAt(i);
    if (!(charCode >= 48 && charCode <= 57)) {
      return false;
    }
  }
  return true;
}

function clearInputs() {
  vardas.value = "";
  pavarde.value = "";
  numeris.value = "";
}

const form = document.getElementById("formField");
form.addEventListener("submit", validateForm);
