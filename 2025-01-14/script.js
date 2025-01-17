const mygtukoElementas = document.getElementById("my-button");
const pavadinimoElementas = document.getElementById("inputasTekstas");
const spalvosElementas = document.getElementById("inputasSpalva");
const uzapvalinimoElementas = document.getElementById("inputasUzapvalinimas");
const soninesParastysElementas = document.getElementById("inputasSoninesKrastines");
const virsusApaciaElementas = document.getElementById("inputasVirsusApacia");
const stiliusElementas = document.getElementById("border-style");

function mygtukoTekstas(){
    let tekstas = pavadinimoElementas.value;
    mygtukoElementas.innerHTML = tekstas;
}
function mygtukoSpalva(){
    let spalva = spalvosElementas.value;
    mygtukoElementas.style.backgroundColor = spalva;
}
function krastoUzapvalinimas(skaicius1 = 0){
    skaicius1 = uzapvalinimoElementas.value + "px";
    mygtukoElementas.style.borderRadius = skaicius1 ;
}
function soninesParastys(skaicius2 = 0) {
    skaicius2 = soninesParastysElementas.value + "px";
    mygtukoElementas.style.paddingLeft = skaicius2;
    mygtukoElementas.style.paddingRight = skaicius2;
}
function virsusApaciaParastys(skaicius3 = 0) {
    skaicius3 = virsusApaciaElementas.value + "px";
    mygtukoElementas.style.paddingTop = skaicius3;
    mygtukoElementas.style.paddingBottom = skaicius3;
}
function apvadoParinkimas(stilius){
    stilius = stiliusElementas.value;
    mygtukoElementas.style.border = stilius;
}


