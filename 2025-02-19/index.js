// Sukurkite programą, patikrinančią ar failas.txt egzistuoja kataloge data/failas.txt. Jei failas egzistuoja - konsolėje išveskite pranešimą “failas.txt yra data kataloge”;
// const arEgzistuoja = fs.existsSync("kelias/iki/failo.txt");
// duoda boolean reikšmę true - jei egzistuoja, false - jei neegzistuoja

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
const arEgzistuoja = existsSync("./data/failas.txt");

//   arEgzistuoja
//     ? "failas.txt yra data kataloge"
//     : "failas.txt neegzistuoja data kataloge"

// Patobulinkite sukurtą programą, kad jei failas kataloge data neegzistuoja arba failas.txt
// neegzistuoja, kad juos sukurtų.

if (!arEgzistuoja) {
  await fs.mkdir("./data", { recursive: true });
  await fs.writeFile("./data/failas.txt", "Sveiki, čia failas.txt");
  console.log("failas.txt ir data katalogas buvo sukurti");
} else {
  console.log("failas.txt yra data kataloge");
}

// Patobulinkite sukurtą programą, kad nuo šiol ji priimtų
// paleidimo metu pateikiamą parametrą, arba kelis parametrus
// (iš process.argv) ir jais papildytų failas.txt, atskirtais naujomis eilutėmis.

const args = process.argv.slice(2);
const date = new Date();

if (args.length > 0) {
  await fs.appendFile(
    "./data/failas.txt",
    `\n${date.toLocaleDateString("lt")} ${date.toLocaleTimeString(
      "lt"
    )} ${args.join(" ")}`
  );
  console.log("failas.txt buvo papildytas");
} else {
  console.log(
    "failas.txt nebuvo papildytas, nes nebuvo nurodyti papildomi duomenys"
  );
}
