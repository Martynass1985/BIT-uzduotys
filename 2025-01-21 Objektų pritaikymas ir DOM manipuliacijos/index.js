const questions = [
  {
    question: "1. Kas yra 'let'?",
    answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
    correctAnswer: 0, // Indeksas teisingo atsakymo
  },
  {
    question: "<h3>2. Ką daro 'document.querySelector'?</h3>",
    answers: [
      "Keičia stilių",
      "Pasirenka DOM elementą",
      "Prideda tekstą",
      "Sukuria funkciją",
    ],
    correctAnswer: 1,
  },

  {
    question: "3. Koks skirtumas tarp let, const, ir var?",
    answers: [
      "Nėra skirtumo",
      "Let ir const yra bloko apimties, var yra funkcijos apimties",
      "Const negali buti perdeklaruotas, let ir var gali",
      "Abu B ir C yra teisingi",
    ],
    correctAnswer: 3,
  },
];

function pradetiQuiz() {
  const dingstMygtukas = document.querySelector("#dingstantis");
  dingstMygtukas.classList.add("hidden");
  const quizElementas = document.querySelector("#quizContainer");
  quizElementas.classList.remove("quiz-container");
  quizElementas.classList.add("question-block");
  const h3 = document.createElement("h3");
  h3.id = "klausimas";
  h3.innerText = questions[0].question;
  h3.style.marginLeft = "20px";
  quizElementas.insertAdjacentElement("beforebegin", h3);
  const sujungtasMasyvas =
    '<a href=""><li>' +
    questions[0].answers.join('</li></a><a href=""><li>') +
    "</a></li>";
  quizElementas.innerHTML = "<ul>" + sujungtasMasyvas + "</ul>";
  let button = document.createElement("button");
  button.style.padding = "5px 10px 5px 10px";
  button.style.color = "white";
  button.style.background =
    "linear-gradient(158deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 74%, rgba(252,176,69,1) 100%)";
  button.style.borderRadius = "5px";
  button.id = "kitasKlausimas";

  button.innerText = "Kitas klausimas";
  quizElementas.insertAdjacentElement("afterend", button);
  button.onclick = pradetiQuiz2();
}

function pradetiQuiz2() {
  const quizElementas = document.querySelector("#quizContainer");
  const klausimoElemantas = document.querySelector("#klausimas");

  klausimoElemantas.innerText = questions[1].question;

  const sujungtasMasyvas =
    '<a href=""><li>' +
    questions[1].answers.join('</li></a><a href=""><li>') +
    "</a></li>";
  quizElementas.innerHTML = "<ul>" + sujungtasMasyvas + "</ul>";
  //   let button = document.createElement("button");
  //   button.innerText = "Kitas klausimas";
  //   quizElementas.insertAdjacentElement("afterend", button);
  //   button.addEventListener("click", pradetiQuiz2());

  //   for (let i = 0; i < questions.length; i++) {

  //   }
}
