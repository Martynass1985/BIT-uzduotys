// 1. Stačiakampio klasė (Rectangle)
// Užduotis:
// a. Sukurkite klasę Stačiakampis (angl. Rectangle), kuri saugos stačiakampio savybes: plotis, aukštis, plotas ir perimetras.
// Pradinės klasės savybės:
//       plotis - (width): gali būti nurodomas pradinis stačiakampio plotis;
//       aukštis - (height): gali būti nurodomas pradinis stačiakampio aukštis;
//       plotas - (area): skaičiuojamas pagal formulę: S = plotis * aukštis;
//       perimetras - (perimeter): skaičiuojamas pagal formulę: P=(plotis+aukštis)*2;
// Keičiami laukeliai:
//       Keičiant plotį arba aukštį, turi būti automatiškai atnaujinamas ir plotas, ir perimetras.
// Klasės metodai:
//       Plotis ir aukštis:
//       Sukurkite „setter“ ir „getter“ metodus plotui ir aukščiui.
//       Keičiant plotį arba aukštį, turi keistis ir plotas bei perimetras.
//  Ploto ir perimetro apskaičiavimas:
//       Sukurkite „getter“ metodus, kurie grąžina plotą ir perimetrą.

class Staciakampis {
  //Klasės privačių laukų apibrėžimas
  #plotis;
  #aukstis;
  #plotas;
  #perimetras;

  //Konstruktorius - funkcija, pasileidžianti objekto sukūrimo metu
  constructor(plotis = 1, aukstis = 1, matavimoVienetas = "m") {
    if (typeof plotis !== "number") {
      console.error(
        `Kuriant klasę gautas plotis buvo ne skaičius, gauta reikšmė ${plotis}. Vietoje to naudosime skaičių 1`
      );
      plotis = 1;
    }
    if (typeof aukstis !== "number") {
      console.error(
        `Kuriant klasę gautas aukštis buvo ne skaičius, gauta reikšmė ${aukstis}. Vietoje to naudosime skaičių 1`
      );
      aukstis = 1;
    }
    const galimiMatavimoVienetai = ["m", "cm", "mm", "dm", "km"];
    if (!galimiMatavimoVienetai.includes(matavimoVienetas)) {
      console.error(
        `Pateiktas matavimo vienetas neatitiko nei vieno iš galimų variantų: ${galimiMatavimoVienetai.join()}. Todėl naudosime metrus`
      );
      matavimoVienetas = "m";
    }

    this.#plotis = plotis;
    this.#aukstis = aukstis;
    this.matavimoVienetas = matavimoVienetas;

    this.#plotas = aukstis * plotis;
    this.#perimetras = (plotis + aukstis) * 2;
  }

  //Norint gauti privačių objekto laukų duomenis, naudojame get metodus
  get plotis() {
    return this.#plotis;
  }
  get aukstis() {
    return this.#aukstis;
  }
  get plotas() {
    return `${this.#plotas}${this.matavimoVienetas}2`;
  }
  get perimetras() {
    return `${this.#perimetras}${this.matavimoVienetas}`;
  }

  //Norint nustatyti privačių objekto laukų duomenis,
  //(+ papildomai pridėti tarpinę logiką kitų reikšmių apskaičiavimui),
  //naudojame set metodus
  set plotis(naujasPlotis) {
    if (typeof naujasPlotis !== "number")
      return console.error(
        "Pateiktas naujas plotis buvo ne skaičius, gauta reikšmė: " +
          naujasPlotis
      );
    this.#plotis = naujasPlotis;
    this.#plotas = naujasPlotis * this.#aukstis;
    this.#perimetras = (naujasPlotis + this.#aukstis) * 2;
  }
  set aukstis(naujasAukstis) {
    if (typeof naujasAukstis !== "number")
      return console.error(
        "Pateiktas naujas aukštis buvo ne skaičius, gauta reikšmė: " +
          naujasAukstis
      );

    this.#aukstis = naujasAukstis;
    this.#plotas = naujasAukstis * this.#plotis;
    this.#perimetras = (this.#plotis + naujasAukstis) * 2;
  }
}

// const st1 = new Staciakampis(10, 56, 456);
// const st2 = new Staciakampis(17, 2, "km");

// console.log(st1);

// console.log(st1.plotas);
// console.log(st2.plotas);

// 2. Apskritimo klasė (Circle)
// Užduotis:
//     Sukurkite klasę Apskritimas (angl. Circle), kuri saugos apskritimo savybes: spindulys ir plotas.
//     Pradinės klasės savybės:
//         spindulys - (radius): gali būti nurodomas pradinis apskritimo spindulys;
//         plotas - (area): skaičiuojamas pagal formulę: S =  pir2
// Keičiami laukeliai:
//       Keičiant spindulį, automatiškai turi būti atnaujinamas ir plotas.
//  Klasės metodai:
//       Spindulys:
//             Sukurkite „setter“ ir „getter“ metodus spinduliui.
//             Keičiant spindulį, turi būti perskaičiuotas plotas.
//  Ploto apskaičiavimas:
//             Sukurkite „getter“ metodą, kuris grąžina plotą.

class Circle {
  #radius;
  #area;
  #matavimoVienetas;
  constructor(radius = 1, matavimoVienetas = "cm") {
    if (typeof radius !== "number") {
      console.error(
        `Kuriant klasę gautas spindulys yra ne skaičius, gauta reikšmė ${radius}. Vietoje to naudosime skaičių 1`
      );
      radius = 1;
    }
    const galimiMatavimoVienetai = ["m", "cm", "mm", "dm", "km"];
    if (!galimiMatavimoVienetai.includes(matavimoVienetas)) {
      console.error(
        `Pateiktas matavimo vienetas neatitiko nei vieno iš galimų variantų: ${galimiMatavimoVienetai.join()}. Todėl naudosime centimetrus`
      );
      matavimoVienetas = "cm";
    }
    this.#radius = radius;
    this.#matavimoVienetas = matavimoVienetas;

    this.#area = 3.14 * radius ** 2;
  }

  get radius() {
    return this.#radius;
  }
  get matavimoVienetas() {
    return this.#matavimoVienetas;
  }
  get area() {
    return `${this.#area}${this.matavimoVienetas}2`;
  }
  set radius(newRadius) {
    if (typeof newRadius !== "number")
      return console.error(
        "Pateiktas naujas spindulys buvo ne skaičius, gauta reikšmė: " +
          newRadius
      );
    this.#radius = newRadius;
    this.#area = 3.14 * newRadius ** 2;
  }
}

const cr1 = new Circle(5, "cm");
console.log(cr1);

console.log(cr1.area);

// 3. Banko sąskaitos klasė (BankAccount)
//   Užduotis:
//      Sukurkite klasę BankoSąskaita (angl. BankAccount), kuri imituos banko sąskaitos funkcionalumą. Savybės: balansas ir operacijų istorija.
//   Pradinės klasės savybės:
//     balansas - (balance): gali būti nurodytas pradinis sąskaitos balansas (pagal nutylėjimą 0);
//     operacijų istorija - (transactionHistory): saugo įrašus apie visus įvykdytus operacijas su sąskaita.
//   Operacijos:
//       indėlis (deposit) – į sąskaitą galima pridėti pinigų;
//       išėmimas (withdraw) – iš sąskaitos galima išimti pinigų, jei yra pakankamai lėšų;
//   Klasės metodai:
//   Indėlis ir išėmimas:
//       Sukurkite metodus indėliui ir išėmimui su sąlyga, kad lėšų negalima išimti, jei balansas yra mažesnis už norimą sumą.
//       Operacijų istorijoje kiekviena operacija turi būti įrašyta su informacija apie operacijos tipą ir sumą.
//   Balansas:
//       Sukurkite „getter“ metodą balansui, kuris grąžina esamą sąskaitos balansą.
//   Operacijų istorija:
//       Sukurkite „getter“ metodą operacijų istorijai, kuris grąžina visų operacijų sąrašą.

class BankAccount {
  #balance;
  #transactionHistory = [];
  constructor(balance = 0) {
    if (typeof balance !== "number" || balance < 0) {
      console.error(
        `Kuriant klasę gautas balansas yra ne skaičius arba reikšmė buvo neigiama, gauta reikšmė ${balance}. Vietoje to naudosime skaičių 0`
      );
      balance = 0;
    } else {
      this.#transactionHistory.push(`Pradinis balansas ${balance}€`);
    }
    this.#balance = balance;
  }
  withdraw(m) {
    if (m <= 0) {
      console.error("Išimama suma turi būti teigiama.");
      return;
    }
    if (this.#balance >= m) {
      this.#balance -= m;
      this.#transactionHistory.push(`Išimta pinigų suma - ${m}€`);
    } else {
      console.error("Nepakanka lėšų sąskaitoje.");
    }
  }
  deposit(m) {
    if (m <= 0) {
      console.error("Papildoma suma turi būti teigiama.");
      return;
    }
    this.#balance += m;
    this.#transactionHistory.push(`Sąskaita papildyta - ${m}€`);
  }
  get balance() {
    return this.#balance;
  }
  get transactionHistory() {
    return this.#transactionHistory;
  }

  set balance(newBalance) {
    if (typeof newBalance !== "number" || newBalance < 0)
      return console.error(
        "Pateikta pinigų suma yra ne skaičius arba yra neigiama, gauta reikšmė: " +
          newBalance
      );
  }
}
const pr1 = new BankAccount(500);
console.log(pr1);
pr1.deposit(200);
pr1.withdraw(189);
console.log(pr1);

// 4. Temperatūros klasė (Temperature)
// Užduotis:
// Sukurkite klasę Temperatūra (angl. Temperature), kuri saugos temperatūros reikšmes Celsijumi ir Fahrenheit.
// Pradinės klasės savybės:
// Celsijus - (celsius): gali būti nurodoma pradinė temperatūra Celsijaus skalėje.
// Keičiamos temperatūros skalės:
// Keičiant temperatūrą Celsijumi arba Fahrenheit, automatiškai turi būti perskaičiuota kita skalė pagal formulę.
// Klasės metodai:
// Temperatūros skalės:
// Sukurkite „getter“ ir „setter“ metodus temperatūrai Celsijumi ir Fahrenheit.
// Keičiant Celsijų arba Fahrenheit, turi būti perskaičiuojama kita skalė:
// Celsijus į Fahrenheit: F = C  9/5+32
// Fahrenheit į Celsijų: C = (F - 32)5/9;
// Temperatūros perskaičiavimas:
// Užtikrinkite, kad keičiant bet kurią temperatūros skalę, kita būtų automatiškai perskaičiuojama ir atnaujinama klasėje.

class Temperaturos {
  #celsius;
  #fahrenheit;

  constructor(celsius = 0) {
    this.celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    if (typeof value !== "number") {
      console.error(
        `Celsijaus temperatūra turi būti skaičius. Gauta: ${value}`
      );
      return;
    }
    this.#celsius = value;
    this.#fahrenheit = this.#celsius * (9 / 5) + 32;
  }

  get fahrenheit() {
    return this.#fahrenheit;
  }

  set fahrenheit(value) {
    if (typeof value !== "number") {
      console.error(
        `Farenheito temperatūra turi būti skaičius. Gauta: ${value}`
      );
      return;
    }
    this.#fahrenheit = value;

    this.#celsius = +((this.#fahrenheit - 32) * (5 / 9)).toFixed(1);
  }
}

const temp = new Temperaturos(25);

console.log(temp.celsius);
console.log(temp.fahrenheit);

temp.fahrenheit = 100;
console.log(temp.celsius);
console.log(temp.fahrenheit);

temp.celsius = 0;
console.log(temp.celsius);
console.log(temp.fahrenheit);
