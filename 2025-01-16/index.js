// 1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų.
// Atsitiktiniai skaičiai nuo M iki O;
// pvz:
// console.log(generuotiAtsitiktinius(4, 100, 105));
// atsakymas konsolėje: [101, 101, 100, 105]

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generuotiAtsitiktinius(n, m, o) {
  const atsitiktiniai = [];
  for (let i = 0; i < n; i++) {
    let atsitiktinisSk = rand(m, o);
    atsitiktiniai.push(atsitiktinisSk);
  }
  return atsitiktiniai;
}
// const atsitiktiniai = [];
console.log(
  "1. sugeneruoti atsitiktinių skaičių masyvą:",
  generuotiAtsitiktinius(8, 1, 20)
);

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, mažesnius nei N.
// pvz:
// tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4

const skaičiųMasyvas = [1, 5, 3, 8, 10, 15, 3, 9, 4, 3, 2];

function tikMazesni(m, n) {
  for (let i = 0; i < m.length; i++) {
    if (m[i] <= n) {
      console.log(m[i]);
    }
  }
}
"4.", tikMazesni(skaičiųMasyvas, 9);

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų,
//  kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;
skaiciai = [3, 5, 6, 3, 8, 9, 3, 3, 3, 7];
function countAllThrees(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 3){
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
}

console.log("3. Suskačiuoti trejetus", countAllThrees(skaiciai));

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array).
// Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve.
//  Kita suskaičiuoja kiek yra nelyginių skaičių;

const numberArray = [1, 5, 3, 8, 10, 2, 15, 3, 9, 4, 3, 6, 2];

function countAllOdd(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 || typeof array[i] !== "number") {
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
}

function countAllEven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 > 0 || typeof array[i] !== "number") {
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
}
// console.log("4. Suskaičiuoti visus nelyginius", countAllOdd(numberArray));
// console.log("4. Suskaičiuoti visus lyginius", countAllEven(numberArray));

// 5. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra lyginių skaičių,
// kurių reikšmė yra  6 arba mažesnė  pateiktame masyve.

function countAllEvenUnderSix(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 > 0 || array[i] > 6) {
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
}

// console.log(
//   "5. Paskaičiuoti lyginius iki 6",
//   countAllEvenUnderSix(numberArray)
// );

// 6.Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą.
// funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

const ismestasKauliukasElement = document.querySelector("#ismesta");
const arLaimejoElement = document.querySelector("#arLaimėjo");
const pasirinktaPuse = document.querySelector("#pasirinkimas");
const jusPasirinkoteElement = document.getElementById(`pasirinkta`);

function throwCoin() {
  let ismesta = rand(0, 1);

  if (ismesta === 0) {
    ismestasKauliukasElement.innerHTML = "Iškrito Skaičius";
  } else {
    ismestasKauliukasElement.innerHTML = "Iškrito Herbas";
  }
}
if (throwCoin().value = "Iškrito Skaičius" && ) {
  ismestasKauliukasElement.innerHTML = "Skaičius";
} else {
  ismestasKauliukasElement.innerHTML = "Herbas";
}

function getValue() {
  jusPasirinkoteElement.innerHTML = pasirinktaPuse.value;
}


// Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų,
// suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas.
//  Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius, kokiu dažnumu krito herbas;

// function countH(mas) {
//   for (let i = 0; i < mas.length; i++) {
//     let herbai = [];
//     if (mas[i] == "H") {
//       herbai.push(mas[i]);
//     }
//   }
//   return herbai.length;
// }

// function countS(masy) {
//   for (let i = 0; i < masy.length; i++) {
//     let skaiciai = [];
//     if (masy[i] == "S") {
//       skaiciai.push(masy[i]);
//     }
//   }
//   return masy.length;
// }

function throwCointwentyTimes() {
  let iskritoHerbas = 0;
  let iskritoSkaicius = 0;
  for (let i = 0; i < 20; i++) {
    let iskrito = throwCoin();
    if (iskrito === "S") iskritoSkaicius++;
    else iskritoHerbas++;
  }
  let iskritoSkaiciusProc = ((iskritoSkaicius / 20) * 100).toFixed(0);
  let iskritoHerbasProc = ((iskritoHerbas / 20) * 100).toFixed(0);
  return (
    "Skaičius iškrito " +
    iskritoSkaicius +
    " kartų, tai yra - " +
    iskritoSkaiciusProc +
    "% nuo mestų kartų skaičiaus, o herbas iškrito " +
    iskritoHerbas +
    " kartų, tai yra - " +
    iskritoHerbasProc +
    "% nuo mestų kartų skaičiaus."
  );
}

console.log(throwCointwentyTimes());

// 8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus,
// bei gražina šią sumą kaip rezultatą;
const numberMasyvas = [101, 58, 37, 8, 10, 29, 15, 3, 9, 46, 3, 62, 2];

function sumAll(masyvas) {
  suma = 0;
  for (let i = 0; i < masyvas.length; i++) {
    suma += masyvas[i];
  }
  return suma;
}

console.log("8. Sudėti masyvo skaičius", sumAll(numberMasyvas));

// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį;
// PVZ: average([1,2,3,4,5])//3

function average(m) {
  s = 0;
  for (let i = 0; i < m.length; i++) {
    s += m[i];
  }
  return (s / m.length).toFixed(2);
}

console.log("9. Išvesti vidurkį", average(numberMasyvas));

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve esančius unikalius skaičius.
// Gražina juos masyvo pavidalu: pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];
const count = [1, 5, 1, 2, 8, 8, 1, 4, 6, 5];
function findAllUniqueNumbers(h) {
  return [...new Set(h)];
}

console.log("10.Surasti unikalius skaičius", findAllUniqueNumbers(count));
