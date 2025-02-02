const prekes = [
  { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
  { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
  { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
  { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
  { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
  { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
  { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
  { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
  { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
  { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 },
];

// 1 Užduotis: Kiekvienai prekei masyve pritaikykite metodą, kuris modifikuoja kiekvienos prekės barkodą.
// Barkodai prasideda pirmąja prekės pavadinimo raide ir atskiriamas brūkšneliu, pvz:
// D-4061615651 (degtukai).
// Rezultatą console.log’inkite

const barkodoMod = prekes.map((preke) => {
  preke.barkodas = preke.pavadinimas[0] + "-" + preke.barkodas;
  return preke;
});

console.log("1.", barkodoMod);

// 2 Užduotis: Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'.
// Rezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’. Rezultatą console.log’inkite

const isfiltruotiSuD = prekes.filter((p) => p.pavadinimas.startsWith("D"));

console.log("2.", isfiltruotiSuD);

// 3 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur.

const isfiltruotiDidesnesUzEur = prekes.filter((p) => p.kaina > 1);
console.log("3.", isfiltruotiDidesnesUzEur);

// 4 Užduotis: Išfiltruokite prekes, kurios kainuoja mažiau nei 3 eur.

const isfiltruotiMazesnesUztris = prekes.filter((p) => p.kaina < 3);
console.log("4.", isfiltruotiMazesnesUztris);

// 5 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur ir mažiau nei 3 eur.

const isfiltruotiMazesnesUztrisIrDidUz1 = prekes.filter(
  (p) => p.kaina <= 3 && p.kaina >= 1
);
console.log("5.", isfiltruotiMazesnesUztrisIrDidUz1);

// 6 Užduotis: Raskite prekę, kurios pavadinimas: ‘Kava’. Jos reikšmę pakeiskite į ‘Kavos pupelės’.

const pakeistiKava = prekes.findIndex((p) => p.pavadinimas === "Kava");
if (pakeistiKava !== -1) {
  prekes[pakeistiKava].pavadinimas = "Kavos pupelės";
}

console.log("6.", prekes);

// 7 Užduotis: Prekėms, kurios kainuoja pigiau nei 1.5eur pridėkite pvmProcentas laukelį į šiuos objektus,
//  šioms prekėms taikomas pvmProcentas: 15%, prekėms kurios yra brangesnės, taikomas pvmProcentas: 21%.
// Apskaičiuokite pvmMokestis laukelių reikšmes, pritaikę šį pvmProcentą prie kainos.

// Finale kiekvienas objektas turi atrodyti taip:
// {
// barkodas: "4061615651",
// pavadinimas: "Degtukai",
// kaina: 0.2,
// pvmProcentas: 15,
// pvmMokestis: 0.03
// }

function gautiPvmInformacija(kaina) {
  let pvmProcentas;
  if (kaina < 1.5) pvmProcentas = 15;
  else pvmProcentas = 21;
  return {
    pvmProcentas,
    pvmMokestis: (kaina * pvmProcentas) / 100,
  };
}
prekes.map((preke) => {
  const { pvmProcentas, pvmMokestis } = gautiPvmInformacija(preke.kaina);
  preke.pvmProcentas = pvmProcentas;
  preke.pvmMokestis = pvmMokestis;
  return preke;
});

console.log("7.", prekes);

// 8 Užduotis: Raskite prekes, kurios kainuoja pigiau nei 2 eur, ir jų pavadinimas baigiasi raide ‘s’.

const atfiltruotosPrekes = prekes.filter(
  (p) => p.kaina < 2 && p.pavadinimas.endsWith("s")
);

console.log("8.", atfiltruotosPrekes);
