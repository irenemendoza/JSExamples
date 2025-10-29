let cajaTexto = document.getElementById("textarea");
let caracteres = document.getElementById("caracteres");
let palabras = document.getElementById("palabras");

cajaTexto.addEventListener("input", () => {
    let texto = cajaTexto.value;
    let numeroCaracteres = texto.replace(/\s/g, "").length;
    caracteres.textContent = numeroCaracteres;
    let arrayPalabras = texto.trim().split(/\s+/);
    let numeroPalabras = texto.trim() === "" ? 0 : arrayPalabras.length;
    palabras.textContent = numeroPalabras;
})

/*
let cajaTexto = document.getElementById("textarea");
let caracteres = document.getElementById("caracteres");
let palabras = document.getElementById("palabras");
let palabra = 0;
let caracter = 0;
let esUnEspacio = false;
let esUnSaltoDeLinea = false;
let primeraPalabra = true;
caracteres.textContent = `Caracteres: ${caracter}`;
palabras.textContent = `Palabras: ${palabra}`;


cajaTexto.addEventListener("keydown", (e) => {
    if (!(e.key === " ") & !(e.key === "Enter") & (/^[a-zA-Z]$/.test(e.key))){
        caracter += 1;
        caracteres.textContent = `Caracteres: ${caracter}`;
        if (primeraPalabra){
            palabra = 1;
            palabras.textContent = `Palabras: ${palabra}`;
            primeraPalabra = false;
        }
    } else if 
        (e.key === " ") {
            esUnEspacio = true;
    } else if (
        e.key === "Enter" 
    ){
        esUnSaltoDeLinea = true;
    }
})

cajaTexto.addEventListener("keydown", (e) => {
    if ((esUnEspacio || esUnSaltoDeLinea) && !(e.key === " ") && !(e.key === "Enter") && (/^[a-zA-Z]$/.test(e.key))){
        esUnEspacio = false;
        esUnSaltoDeLinea = false;
        palabra += 1;
        palabras.textContent = `Palabras: ${palabra}`;
    }
})

*/
