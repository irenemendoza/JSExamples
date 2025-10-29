const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const resultado = document.getElementById("resultadoTexto");

function validarEntrada(n1, n2) {
    if (n1.trim() === "" || n2.trim() === "") {
        resultado.textContent = "Por favor, rellena ambos campos";
        return false;
    }
    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Por favor, introduce números válidos";
        return false;
    }
    return true;
}

sumar.addEventListener("click", ()=>{
    if (validarEntrada(num1.value, num2.value)) {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        resultado.textContent = (n1 + n2).toFixed(2);
    }
})

restar.addEventListener("click", ()=>{
    if (validarEntrada(num1.value, num2.value)) {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        resultado.textContent = (n1 - n2).toFixed(2);
    }
})

multiplicar.addEventListener("click", ()=>{
    if (validarEntrada(num1.value, num2.value)) {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        resultado.textContent = (n1 * n2).toFixed(2);
    }
})

dividir.addEventListener("click", ()=>{
    if (validarEntrada(num1.value, num2.value)) {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        if (n2 === 0) {
            resultado.textContent = "No se puede dividir por cero";
            return;
        }
        resultado.textContent = (n1 / n2).toFixed(2);
    }
})