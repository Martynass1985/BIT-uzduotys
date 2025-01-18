function lyginisArNe(x){
    if (x % 2 == 0){
        return "=> " + x + " Skaičius yra lyginis";
    }
        return "=> " + x + " Skaičius yra nelyginis";
}
console.log("1. Lyginio skaičiaus nustatymas", lyginisArNe(3));

function daliklis(x, y){
    let z = x % y;
    return "=> Dalinant " + x + " iš " + y + ", liekana yra " + z;
}

console.log("2. Liekanos paskaičiavimas", daliklis(8, 5));


function vidurkis(x, y){
    let z = (x + y)/2;
    return "=> Skaičių " + x + " ir " + y + " vidurkis yra " + z.toFixed(2);
}

console.log ("3. Dviejų skaičių vidurkis", vidurkis(8, 58));


function paskaiciuotiSekundes(h, m, s){
    let x = h*3600 + m*60 + s;
    return "=> Po vidurnakčio prabėgo => " + x + " <= sekundžių.";
}

console.log("4. Prabėgusios sekundės po vidurnakčio", paskaiciuotiSekundes(9, 45, 45));

function arDalinasiIs3Ir5(x){
    if(x % 3 == 0 && x % 5 == 0){
        return "Labas rytas";
    }else if(x % 3 == 0){
        return "Labas"; 
    }else if(x % 5 == 0){
        return "Rytas"; 
    } 
    return "=> " + x;
}

console.log("5. Ar dalinasi iš 3 ir 5", arDalinasiIs3Ir5(3));

function jonasArPetras(n, m) {
    if (n < m ){
        return "Petras";
    } else if (n > m){
    return "Jonas";
}
return "Lygiosios";
}

console.log("6. Laimėtojo vardas: ", jonasArPetras(55, 20));

function kiekKainuosPlyteles(a, b){
    let plotas = a * b;
   let pakuociusk = Math.ceil((plotas + (plotas * 0.05)) / 1.5);
   let sumaEur =  pakuociusk * 1.5 * 23;
   return "Kambario ilgis " + a + "m plotis " + b + "m, plotas " + plotas + "m², reikės " + pakuociusk + " pakuočių plytelių. Reikalinga pinigų suma " + sumaEur + "€";
}

console.log("7.", kiekKainuosPlyteles(8, 9));

function paverstiMonetomis(n){
   let n1 = (n - (n % 5))/5; 
   let n2 = (n - n1 * 5 - ((n - n1) % 2))/2;
   let n3 = n - n1 * 5 - n2 * 2;
   let monetuSk = n1 + n2 + n3;
   return "Norint gauti " + n + " sumą litais mums reikės " + n1 + " monetų po 5 Lt, " + n2 + " monetų po 2 lt ir " + n3 + " monetu po 1 Lt. Viso bus " + monetuSk + " monetų";
}
console.log("8.", paverstiMonetomis(58));