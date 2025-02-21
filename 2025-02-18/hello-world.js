console.log("Martynas Gauronskis");

import { calculateSum } from "./sum.js";

const args = process.argv.slice(2);

const sum = calculateSum(args);

console.log(`Suma: ${sum}`);

import { showTodayInfo } from "./today.js";

const args1 = process.argv.slice(2);

if (args1.length === 1) {
  const rezimas = args1[0]; // Paimame pirmąjį argumentą kaip rėžimą
  showTodayInfo(rezimas);
} else {
  console.log(
    "Prašome pasirinkti vieną iš pateiktų rėžimų: savaites_diena, menuo, menesio_diena"
  );
}
