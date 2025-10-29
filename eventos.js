// De la clase anterior

/*
const btn = document.querySelector("button");
btn.addEventListener("click", function(){alert("Botón pulsado")});
*/
/*
let primerFormulario = document.forms[0];
*/
/*
document.getElementById("buttonSubmit").addEventListener("click", event => {
    if (primerFormulario.elements[0].value.includes("@")){
        primerFormulario.submit();
        console.log("Formulario enviado");
    } else {
            primerFormulario.reset();
            alert("Email incorrecto");
            event.preventDefault()
        }
    })
document.getElementById("buttonReset").addEventListener("click", event => {
    event.preventDefault();
    console.log("Reseteamos");
    primerFormulario.reset();
})
*/
/*
primerFormulario.addEventListener("submit", event => {
    event.preventDefault();
    primerFormulario.querySelector(".error").textContent =" ";
    if (primerFormulario.elements[0].value >= 18 && primerFormulario.elements[1].value < 25){
        primerFormulario.submit();
        console.log("Se ha enviado el formulario")
    } else {
        primerFormulario.querySelector(".error").textContent ="La edad debe estar entre 18 y 25 años";
        primerFormulario.querySelector(".error").style.color = "red";
    }
})
    */
/*
document.querySelector("h1").addEventListener("mouseenter", () => document.querySelector("h1").style.color = "blue");
document.querySelectorAll("li").forEach(elLi => elLi.addEventListener("mouseenter", () => elLi.style.color = "green"));
document.querySelectorAll("form").forEach(elForm => elForm.addEventListener("mouseenter", () => elForm.style.color = "pink"));
document.querySelectorAll("p").forEach(elP => elP.addEventListener("mouseenter", () => elP.style.color = "red"));
document.querySelectorAll("*").forEach(el => el.addEventListener("mouseleave", () => el.style.color = "black"));
*/
/*
function colorAleatorio() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`
}
let elementos = document.body.getElementsByTagName("*");
for (let elemento of elementos) {
    elemento.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = colorAleatorio());
    elemento.addEventListener("mouseleave", (event) => event.target.style.backgroundColor = "white");
}

document.querySelector("*").addEventListener("contextmenu", (event) => event.preventDefault())
*/

document.getElementById("divInterno").addEventListener("contextmenu", (evento) => {
    evento.stopPropagation();
    alert("Menú contextual personalizado!");
    evento.preventDefault();
})