const questions = [
  {
    question: "1. Kas yra 'let'?",
    answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
    correctAnswer: 0,
  },
  {
    question: "2. Ką daro 'document.querySelector'?",
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
  {
    question: "4. Koks skirtumas tarp `==` ir `===` operatorių?",
    answers: [
      "Nėra skirtumo",
      "`==` tikrina reikšmes, o `===` tikrina tiek reikšmes, tiek tipo atitikimus",
      "`===` konvertuoja tipus ir tada tikrina reikšmes",
      "`==` tikrina tipo atitikimą, o `===` tikrina reikšmes",
    ],
    correctAnswer: 1,
  },
  {
    question: "5. Kokia yra `undefined` reikšmė JavaScript?",
    answers: [
      "Reikšmė, kai kintamasis nėra priskirtas",
      "Reikšmė, kai kintamasis buvo ištrintas",
      "Reikšmė, kurią grąžina tuščios funkcijos",
      "Reikšmė, kuri yra visada apibrėžta",
    ],
    correctAnswer: 0,
  },
  {
    question: "6. Ką grąžina funkcija, kai ji neturi `return` sakinio?",
    answers: [
      "undefined",
      "null",
      "false",
      "Nieko, jos rezultatas bus tuščias",
    ],
    correctAnswer: 0,
  },
  {
    question: "7. Koks rezultatas bus, kai atliksime `null == undefined`?",
    answers: ["false", "true", "TypeError", "undefined"],
    correctAnswer: 1,
  },
  {
    question: "8. Ką daro `setTimeout` funkcija?",
    answers: [
      "Paleidžia funkciją nedelsiant",
      "Paleidžia funkciją po nustatyto laiko",
      "Paleidžia funkciją kas tam tikrą laiką",
      "Sustabdo vykdomą funkciją po nustatyto laiko",
    ],
    correctAnswer: 1,
  },
  {
    question: "9. Ką grąžina `NaN === NaN`?",
    answers: ["true", "false", "undefined", "TypeError"],
    correctAnswer: 1,
  },
  {
    question: "10. Kaip sukurti masyvą JavaScript'e?",
    answers: [
      "Naudojant `Array()`",
      "Naudojant `new Array()`",
      "Naudojant `[]`",
      "Visi atsakymai yra teisingi",
    ],
    correctAnswer: 3,
  },
  {
    question: "11. Kas bus, kai atliksime `typeof null`?",
    answers: ["object", "null", "undefined", "false"],
    correctAnswer: 0,
  },
  {
    question: "12. Kaip pašalinti paskutinį elementą iš masyvo?",
    answers: [
      "Naudojant `delete` operatorių",
      "Naudojant `pop()` metodą",
      "Naudojant `shift()` metodą",
      "Naudojant `remove()` metodą",
    ],
    correctAnswer: 1,
  },
];

let dabartinioKlausimoIndeksas = 0;
let pasirinktasAts = [];
let laikmatis;
let likesLaikas = 20;

function pradetiQuiz() {
  const pradetiMygtukas = document.querySelector("#dingstantis");
  pradetiMygtukas.style.display = "none";
  sekantisKlausimas();
}

function sekantisKlausimas() {
  const question = questions[dabartinioKlausimoIndeksas];
  let klausimoHTML = `
    <h3>${dabartinioKlausimoIndeksas + 1}. Klausimas</h3>
    <fieldset class="question" name="html-question-${dabartinioKlausimoIndeksas}">
      <legend><b><i>${question.question}</i></b></legend>
      <ul class="atsakymu-sarasas">`;

  for (let i = 0; i < question.answers.length; i++) {
    klausimoHTML += `
      <li>
        <label for="atsakymas${i + 1}"></label>
        <input
          type="radio"
          id="atsakymas${i + 1}"
          name="atsakymas"
          value="${question.answers[i]}"
        />
        ${question.answers[i]}
      </li>`;
  }

  klausimoHTML += `
    </ul>
  </fieldset>`;

  klausimoHTML += `<div id="laikmatis">Likęs laikas: ${likesLaikas}s</div>`;

  if (dabartinioKlausimoIndeksas < questions.length - 1) {
    klausimoHTML += `<button id="dingstantis" onclick="nextQuestion()">Sekantis klausimas</button>`;
  } else {
    klausimoHTML += `<button id="dingstantis" onclick="pabaigtiQuiz()">Baigti Quiz</button>`;
  }

  const quizElementas = document.querySelector("#quiz-container");
  quizElementas.innerHTML = klausimoHTML;

  pradetiLaikmati();
}

function pradetiLaikmati() {
  likesLaikas = 20;
  const laikoElementas = document.querySelector("#laikmatis");

  laikmatis = setInterval(function () {
    likesLaikas--;
    laikoElementas.textContent = `Likęs laikas: ${likesLaikas}s`;

    if (likesLaikas <= 0) {
      clearInterval(laikmatis);
      nextQuestion();
    }
  }, 2000);
}

function nextQuestion() {
  const pasirinktas = document.querySelector('input[name="atsakymas"]:checked');
  if (!pasirinktas) {
    alert("Pasirinkite atsakymą prieš pereidami prie kito klausimo.");
    return;
  }
  pasirinktasAts[dabartinioKlausimoIndeksas] = pasirinktas.value;
  dabartinioKlausimoIndeksas++;
  clearInterval(laikmatis);
  sekantisKlausimas();
}

function pabaigtiQuiz() {
  const pasirinktas = document.querySelector('input[name="atsakymas"]:checked');
  if (!pasirinktas) {
    alert("Prieš baigdami - Pasirinkite atsakymą.");
    return;
  } else if (pasirinktas) {
    pasirinktasAts[dabartinioKlausimoIndeksas] = pasirinktas.value;
  }

  let klausimoHTML = "<h3>Quiz baigtas!</h3>";

  let taskai = 0;
  questions.forEach((question, index) => {
    const pasirinktas = pasirinktasAts[index];
    if (pasirinktas === question.answers[question.correctAnswer]) {
      taskai++;
    }
  });

  klausimoHTML += `<p>Jūsų rezultatas: ${taskai} iš ${questions.length}</p>`;

  klausimoHTML += "<h4>Jūsų atsakymai:</h4><ul>";
  questions.forEach((question, index) => {
    klausimoHTML += `
      <li><b>${question.question}</b><br>
        Jūsų atsakymas: ${pasirinktasAts[index] || "Nepasirinktas"}<br>
        Teisingas atsakymas: ${question.answers[question.correctAnswer]}
      </li>`;
  });
  klausimoHTML += "</ul>";

  klausimoHTML += `<button id="dingstantis" onclick="pradetiIsNaujo()">Pradėti iš naujo</button>`;
  const quizElementas = document.querySelector("#quiz-container");
  quizElementas.innerHTML = klausimoHTML;
}

function pradetiIsNaujo() {
  dabartinioKlausimoIndeksas = 0;
  pasirinktasAts = [];
  const pradetiMygtukas = document.querySelector("#dingstantis");
  pradetiMygtukas.style.display = "inline-block";
  const quizElementas = document.querySelector("#quiz-container");
  quizElementas.innerHTML = `<button id="dingstantis" onclick="pradetiQuiz()">Pradėti QUIZ</button>`;
}

const pradetiMygtukas = document.querySelector("#dingstantis");
pradetiMygtukas.addEventListener("click", pradetiQuiz);
