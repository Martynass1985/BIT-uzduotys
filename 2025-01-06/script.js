//Generuojami trys atsitiktiniai skaičiai nuo 1 iki 10 
//(Konsolėje parašomi šie skaičiai iš eilės, kad  eitų atskirti kuris yra pirmasis, 
//antrasis bei trečiasis):

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let sk1 = rand(1, 10);
    let sk2 = rand(1, 10);
    let sk3 = rand(1, 10);

console.log ("Pirmais skaičius yra " + sk1);
console.log ("Antrasis skaičius yra " + sk2);
console.log ("Trečiasis skaičius yra " + sk3);

//1. console.log’inkite patį didžiausią iš šių trijų skaičių;

if (sk1 > sk2 && sk1 > sk3) {
    console.log ("Pirmas skaičius yra Didžiausias");
} else if (sk2 > sk1 && sk2 > sk3) {
    console.log ("Antras skaičius yra Didžiausias");
} else if (sk3 > sk1 && sk3 > sk2) {
    console.log ("Trečias skaičius yra Didžiausias");
}

//2. console.log’inkite patį mažiausią iš šių trijų skaičių;

if (sk1 < sk2 && sk1 < sk3) {
    console.log ("Pirmas skaičius yra Mažiausias");
} else if (sk2 < sk1 && sk2 < sk3) {
    console.log ("Antras skaičius yra Mažiausias");
} else if (sk3 < sk1 && sk3 < sk2) {
    console.log ("Trečias skaičius yra Mažiausias");
} else {
    console. log ("Lygiosios")
}

//3. Jei pirmų dviejų sk. suma yra didesnė nei paskutinių dviejų sk. suma, 
//dalinkite visų trijų sumą iš 3 ir apvalinkite į didžiąją pusę.
// Rezultatą console.logi’inkite;

//4. Jei pirmų dviejų sk. suma yra mažesnė nei paskutinių dviejų sk. suma, 
//dalinkite visų trijų sumą iš 5 ir apvalinkite į mažąją pusę. 
//Rezultatą console.logi’inkite;

if ((sk1 + sk2) > (sk2 + sk3)) {
    let rezultatas = Math.ceil((sk1+sk2+sk3) / 3);
    console.log ("Pirmieji didesni, todėl rezultatas - " + rezultatas);
} else if ((sk1 + sk2) < (sk2 + sk3)) {
    rezultatas = Math.floor ((sk1+sk2+sk3) / 5);
    console.log ("Antrieji didesni, todėl rezultatas - " + rezultatas);
}

//5. Jei pirmas skaičius didesnis už antrąjį tačiau mažesnis už trečiąjį 
// - konsolėje parašykite - “Pirmas - vidurinis”;

if (sk1 > sk2 && sk1 < sk3) console.log ("Pirmas - vidurinis");

//6. Jei antras skaičius didesnis už abu - konsolėje parašykite “Antras didžiausias”;

if (sk2 > sk1 && sk2 > sk3) console.log ("Antras - Didžiausias");

//7. Jei trečias skaičius mažesnis už abu - konsolėje parašykite “Trečias mažiausias”

if (sk3 < sk1 && sk3 < sk2) console.log ("Trečias - mažiausias");

//8. Jei pirmasis skaičius yra 3, 5 arba 7 - konsolėje parašykite 
//to skaičiaus pakėlimo 4-tuoju laipsniu rezultatą.

if (sk1 == 3 || sk1 == 5 || sk1 == 7) console.log ("Pakelta 4-tuoju laipsniu - " + (sk1 **= 4));

//9. Jei pirmasis skaičius yra 4 arba 9 - konsolėje parašykite to skaičiaus šaknies rezultatą 

if (sk1 == 4 || sk1 == 9) console.log ("Šaknis - " + (sk1 **= 0.5));
