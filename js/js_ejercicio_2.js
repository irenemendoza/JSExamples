let botonClic = document.getElementById("clicButton");
let textoClic = document.getElementById("clicCount");
let pagina = document.getElementById("container");
let numeroClics = 0;
textoClic.textContent = `Clics: ${numeroClics}`;

botonClic.addEventListener("click", () => {
    numeroClics += 1;
    textoClic.textContent = `Clics: ${numeroClics}`;
}    
)