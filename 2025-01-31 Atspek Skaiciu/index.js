const inputElementas = document.querySelector("#myForm");
const pasirinkimoElementas = document.querySelector("#pasirinktas");
const iskritusioElementas = document.querySelector("#iskrites");
const atsitiktinioSkElementas = document.querySelector("#random");
const skaiciuParinkimasForm = document.querySelector("#skaiciu-parinkimas");
const resultsTableBody = document.querySelector("#resultsTable tbody");

let maxNumber = 10;
let randomNumberResult = 0;
let hasGuessed = false;
let results = [];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

skaiciuParinkimasForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedValue = document.querySelector("#parinktis").value;
  maxNumber = Number(selectedValue);
  const numberInput = document.querySelector("#pasirinktasSkaicius");
  numberInput.setAttribute("max", maxNumber);
  randomNumberResult = 0;
  hasGuessed = false;
  iskritusioElementas.innerHTML = "";
  document.querySelector("#resultMessage").innerHTML = "Prašome spėti skaičių!";
});

function chooseNumber(event) {
  event.preventDefault();
  if (hasGuessed) {
    document.querySelector("#resultMessage").innerHTML =
      "Jūs jau spėjote. Norėdami pradėti naują žaidimą, pasirinkite naują skaičių!";
    return;
  }
  const userInput = parseInt(
    document.querySelector("#pasirinktasSkaicius").value
  );
  if (isNaN(userInput)) {
    document.querySelector("#resultMessage").innerHTML =
      "Prašome įvesti skaičių!";
    return;
  }
  pasirinkimoElementas.innerHTML = userInput;
  let resultMessage = "";
  if (userInput === randomNumberResult) {
    resultMessage = "Teisingai! Atspėjote teisingą skaičių!";
  } else if (userInput < randomNumberResult) {
    resultMessage = "Jūsų spėtas skaičius yra per mažas!";
  } else if (userInput > randomNumberResult) {
    resultMessage = "Jūsų spėtas skaičius yra per didelis!";
  }
  document.querySelector("#resultMessage").innerHTML = resultMessage;
  hasGuessed = true;
  iskritusioElementas.innerHTML = randomNumberResult;

  const resultRow = document.createElement("tr");
  resultRow.innerHTML = `
    <td>${userInput}</td>
    <td>${randomNumberResult}</td>
    <td>${resultMessage}</td>
  `;
  resultsTableBody.appendChild(resultRow);

  results.push({
    guessedNumber: userInput,
    randomNumber: randomNumberResult,
    resultMessage: resultMessage,
  });
  document.querySelector("#pasirinktasSkaicius").value = "";
  localStorage.setItem("gameResults", JSON.stringify(results));
}

inputElementas.addEventListener("submit", chooseNumber);

function randomNumber() {
  randomNumberResult = rand(1, maxNumber);
  document.querySelector("#resultMessage").innerHTML =
    "Pasirinktas naujas skaičius! Galite spėti.";
  hasGuessed = false;
  iskritusioElementas.innerHTML = "";
}

atsitiktinioSkElementas.addEventListener("click", randomNumber);

window.onload = function () {
  const savedResults = localStorage.getItem("gameResults");
  if (savedResults) {
    results = JSON.parse(savedResults);

    results.forEach((result) => {
      const resultRow = document.createElement("tr");
      resultRow.innerHTML = `
        <td>${result.guessedNumber}</td>
        <td>${result.randomNumber}</td>
        <td>${result.resultMessage}</td>
      `;
      resultsTableBody.appendChild(resultRow);
    });
  }
};
