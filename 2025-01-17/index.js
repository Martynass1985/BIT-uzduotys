// 1. Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę
// Multiplication(3)
// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// Ir t.t. iki
// 10 * 3 = 30

// function multiplication(sk) {
//   const daugybosLentele = [];
//   for (let i = 1; i <= 10; i++) {
//     let ats = i * sk;
//     let daugyba = i + " * " + sk + " = " + ats;
//     daugybosLentele.push(daugyba);
//   }
//   return daugybosLentele;
// }

function multiplication(sk) {
  for (let i = 1; i <= 10; i++) {
    let ats = i * sk;
    let daugyba = i + " * " + sk + " = " + ats;
    console.log(daugyba);
  }
}

multiplication(4);

// 2. Išvesti į konsolę skaičius nuo 10 iki 100. Visais žinomais ciklais while, for
// pvz (10, 20, 30,..,..,..,.., 100)

// function skaiciaiKasDesimt() {
//   let i = 10;
//   const skaiciai = [];
//   while (i <= 100) {
//     skaiciai.push(i);
//     i += 10;
//   }
//   return skaiciai;
// }
function skaiciaiKasDesimt() {
  const skaiciai = [];
  for (let i = 10; i <= 100; i += 10) {
    skaiciai.push(i);
  }
  return skaiciai;
}

console.log("2. išvesti seką kas 10", skaiciaiKasDesimt());

// 3. Perašyti pateikta ciklą for į ciklą while.
// for(let i = 0; i <=10; i += 2){
// console.log(`skaičius i = ${i}`)
// }

function skaiciai() {
  let i = 0;
  while (i <= 10) {
    console.log(`skaičius i = ${i}`);
    i += 2;
  }
}
skaiciai();

// 4. Naudojantis ciklu, sumuokite visus skaičius nuo 1 iki 100 ir išveskite
// galutinį rezultatą.
// Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu

// function sumaIkiSimto() {
//   let suma = 0;
//   for (let i = 1; i < 100; i++) {
//     suma += i;
//   }
//   return suma;
// }

function sumaIkiSimto() {
  let i = 1;
  let suma = 0;
  while (i < 100) {
    suma += i;
    i++;
  }
  return suma;
}

console.log("3.Skaičių nuo 1 iki 100 suma", sumaIkiSimto());

// 5. Parašykite f-ją, kuri išvestų visus skaičius, kurie dalijasi iš 3
// intervale nuo 0 iki 100.
// Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu

// function arDalinasiIsTriju() {
//   const skaiciaiKurieDalinasiIsTriju = [];
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//       skaiciaiKurieDalinasiIsTriju.push(i);
//     }
//   }
//   return skaiciaiKurieDalinasiIsTriju;
// }

function arDalinasiIsTriju() {
  const skaiciaiKurieDalinasiIsTriju = [];
  let i = 1;
  while (i <= 100) {
    if (i % 3 == 0) {
      skaiciaiKurieDalinasiIsTriju.push(i);
    }
    i++;
  }
  return skaiciaiKurieDalinasiIsTriju;
}

console.log(
  "5. skaičiai nuo 0 iki 100, kurie dalinasi iš 3",
  arDalinasiIsTriju()
);
// 6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir
// suskaičiuoja kiek skaitenų jį sudaro
// Pvz:
// countDigits(458962) => 6
// countDigits(452) => 3
// countDigits(19) => 2

function kiekSimboliu(sk) {
  return sk.toString().length;
}
console.log("6. Kokio ilgio skaičius", kiekSimboliu(459856878971645));

// 7. Matematikas, pastebėjęs gobšaus turtuolį pasiūlė tokį sandorį:
// Pirmą dieną jis turtuoliui duos 1 mln. dolerių, o tas jam už tai sumokės 2
// centus. Kitą dieną matematikas ir vėl duos turtuoliui 1 mln. dolerių, o tas
// jam užmokės dvigubai daugiau negu praėjusią dieną, t.y. 4 centus. Ir taip jie
// darys visą mėnesį (31 dieną, matematikas kasdien duos po milijoną dolerių, o
// turtuolis mokės dvigubai daugiau negu praėjusią dieną. Parašykite programą
// kuri suskaičiuotų kiek pinigų duos matematikas . turtuoliui ir kiek turtuolis
// sumokės matematikui.

function kasKiekGaus() {
  let turtuolisGaus = 0;
  let matematikasGaus = 2;
  for (let i = 1; i <= 31; i++) {
    turtuolisGaus += 1;
    matematikasGaus *= 2;
  }
  matematikasGaus = (matematikasGaus / 100 / 1000000).toFixed(1);
  return `Turtuoliui Matematikas sumokės ${turtuolisGaus} mln. $, tuo tarpu Turtuolis jam sumokės ${matematikasGaus} mln $`;
}

console.log(kasKiekGaus());

// 8. Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100
// iki 999 intervale. Armstongo skaičiaus pvz ABC = A3 + B3 + C3 (visų
// atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.)

function armstrongNumbers() {
  for (let i = 100; i < 1000; i++) {
    p = i.toString().split("").map(Number);
    suma = p[0] ** p.length + p[1] ** p.length + p[2] ** p.length;
    if (i === suma) {
      console.log(i);
    }
  }
}

armstrongNumbers();

// 9. Parašykite funkcija kuri paskaičiuotų atstumą tarp dviejų taškų
// koordinačių sistemoje. Parametrai 4 perduodami skaičiai x1, y1, x2, y2
// @example:
// (0,0) (0,1) => 1
// (0,0) (1,0) => 1
// (-5,0) (10,-10) =>
// 18.027756377319946

function distanceBetween(x1, y1, x2, y2) {
  let a = x1 - x2;
  let b = y1 - y2;
  let c = Math.hypot(a, b);
  return c;
}

console.log("9. Atstumas Tarp taškų", distanceBetween(-5, 0, 10, -10));
