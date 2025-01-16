// 1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų.
// Atsitiktiniai skaičiai nuo M iki O;
// pvz:
// console.log(generuotiAtsitiktinius(4, 100, 105));
// atsakymas konsolėje: [101, 101, 100, 105]

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generuotiAtsitiktinius(n, m, o) {
  let index = 0;
  const atsitiktiniai = [];
  while (index < n) {
    const atsitiktinisSk = rand(m, o);
    atsitiktiniai.push(atsitiktinisSk);
    index++;
  }
  return atsitiktiniai;
}
const atsitiktiniai = [];
console.log(
  "1. sugeneruoti atsitiktinių skaičių masyvą:",
  generuotiAtsitiktinius(8, 1, 20)
);

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, mažesnius nei N.
// pvz:
// tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4

const skaičiųMasyvas = [1, 5, 3, 8, 10, 15, 3, 9, 4, 3, 2];

function tikMazesni(masyvas, sk) {
  let index = 0;
  const tikMazesniuSk = [];
  while (index < masyvas.length) {
    if (masyvas[index] < sk) {
      tikMazesniuSk.push(masyvas[index]);
    }
    index++;
  }
  return tikMazesniuSk;
}
console.log("2. Mažesni skaičiai iš masyvo:", tikMazesni(skaičiųMasyvas, 9));

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų,
//  kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;
skaiciai = [3, 5, 6, 3, 8, 9, 3, 3, 3, 7];
function countAllThrees(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 3) {
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
// function filtruotiNelyginius(masyvas) {
//   // let index = 0;

//   // while (index < masyvas.length){
//   //     if (masyvas[index] % 2 > 0 || typeof masyvas[index] !== "number"){
//   //         masyvas.splice(index, 1)
//   //     } else index++;

//   // }
// //   for (let index = 0; index < masyvas.length; index++) {
// //     if (masyvas[index] % 2 == 0 || typeof masyvas[index] !== "number") {
// //       masyvas.splice(index, 1);
// //       index--;
// //     }
// //   }
// //   return masyvas;
// // }
