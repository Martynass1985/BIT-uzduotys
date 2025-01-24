// 1. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo
// elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti
// geriausiai besimokantį ir blogiausiai.

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const atsitiktiniai = [];
function generuotiAtsitiktinius(n, m, o) {
  for (let i = 0; i < n; i++) {
    let atsitiktinisSk = rand(m, o);
    atsitiktiniai.push(atsitiktinisSk);
  }
  return atsitiktiniai;
}
// console.log(generuotiAtsitiktinius());

// function geriausiBlogiausi(masyvas) {
//   const didziausi = [];
//   const maziausi = [];
//   for (let i = 0; i < masyvas.length; i++) {
//     if (masyvas[i] == 10) {
//       didziausi.push(masyvas[i]);
//     } else if (masyvas[i] == 1) {
//       maziausi.push(masyvas[i]);
//     }
//   }
//   return { didziausi, maziausi };
// }

// console.log(generuotiAtsitiktinius());

// 2. Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoj min 3
// pažymiai. Rasti studento semestro vidurkį.
// Paprastesnis variantas susikuriam masyvą rankiniu būdu
// Sudėtingesnis variantas susigeneruojam masyvą iš random pažymių nuo 1 iki 10,
// pažymių kiekis irgi random nuo 3 iki 6

function disciplinosVidurkis(masyvas) {
  let suma = 0;
  for (let i = 0; i < masyvas.length; i++) {
    suma += masyvas[i];
  }
  return (suma / masyvas.length).toFixed(1);
}

function TrimestroVidurkis(n = rand(3, 6), m = 1, o = 10) {
  let rezultatai = [];
  for (let i = 0; i < 7; i++) {
    let kiekPazymiu = rand(3, 6);
    let pazymiai = [];
    for (let j = 0; j < kiekPazymiu; j++) {
      pazymiai.push(rand(m, o));
    }
    rezultatai.push(+disciplinosVidurkis(pazymiai));
  }
  console.log(rezultatai);
  return disciplinosVidurkis(rezultatai);
}

console.log(TrimestroVidurkis());

// 3. Mokytojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei 600
// Eurų., < nei 800Eurų. ir < nei 1100 eurų. Iš tų trijų grupių surasti, kurių
// yra daugiausia?
// Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų
// Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo 500 iki
// 1100, elementų gali būti 100

function trysAtlyginimai(n) {
  let maziauNei600 = 0;
  let maziauNei800 = 0;
  let maziauNei1100 = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 600) {
      maziauNei600++;
    } else if (n[i] < 800) {
      maziauNei800++;
    } else {
      maziauNei1100++;
    }
  }
  if (maziauNei600 > maziauNei800 && maziauNei600 > maziauNei1100) {
    return `Daugiausiai yra atlyginimų po 600 kurių yra ${maziauNei600}`;
  } else if (maziauNei800 > maziauNei600 && maziauNei800 > maziauNei1100) {
    return `Daugiausiai yra atlyginimų po 800 kurių yra ${maziauNei800}`;
  } else if (maziauNei1100 > maziauNei600 && maziauNei1100 > maziauNei800) {
    return `Daugiausiai yra atlyginimų po 1100 kurių yra ${maziauNei1100}`;
  } else return "Po lygiai";
}

console.log(generuotiAtsitiktinius(100, 500, 1100));

console.log(trysAtlyginimai(atsitiktiniai));

// 4. Parašyti f-ją kuri sudvigubintu masyvą
// @example
// ['Ace', 10, true] => ['Ace', 10, true, 'Ace', 10, true]
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]

function dvigubasMasyvas(array) {
  return array.concat(array);
}
console.log(dvigubasMasyvas(["Ace", 10, true]));
console.log(dvigubasMasyvas([0, 1, 2, 3]));

// 5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja į didžiasias
// raides.
// @example
// [ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP',
// 'GLUTINOUS-SHRIEK', 'ELEVATION' ],
// [ 'a', 'b', 'c', 'd', 'e' ] => [ 'A', 'B', 'C', 'D', 'E' ]

// const masyvas = ["internship", "glutinous-shriek", "elevation"];
// const naujasMasyvas = [];
// for (let i = 0; i < masyvas.length; i++) {
//   let masyvasDidziosiomis = masyvas[i].toUpperCase();
//   naujasMasyvas.push(masyvasDidziosiomis);
// }
// console.log(naujasMasyvas);

// 6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais
// @example
// [ '', 'a', 'bc', 'def', 'ghij' ] => [ 0, 1, 2, 3, 4 ]
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]

const obuolys = ["angular", "react", "ember"];
function pakeistiStrinIStringIlgi(masyvas) {
  for (let i = 0; i < masyvas.length; i++) {
    masyvas.splice(i, 1, masyvas[i].length);
  }
  return masyvas;
}

console.log(pakeistiStrinIStringIlgi(obuolys));

function stringIlgis(arr) {
  return arr.map((str) => str.length);
}

let input = ["", "a", "bc", "def", "ghij"];
let output = stringIlgis(input);
console.log(output);
