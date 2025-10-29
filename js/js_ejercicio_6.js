let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;

let cronometro = document.getElementById("temporizador");
let btnInicio = document.getElementById("start");
let btnPausa = document.getElementById("pause");
let btnReiniciar = document.getElementById("restart");

function actualizarCronometro() {
    let h = (horas<10 ? "0" + horas : horas);
    let m = (minutos<10 ? "0" + minutos : minutos);
    let s = (segundos<10 ? "0" + segundos : segundos)
    cronometro.textContent = h + ":" + m + ":" + s;
}

function cronometrar() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++
    }
    actualizarCronometro();
}

btnInicio.addEventListener("click", () => {
    if (intervalo) return;
    intervalo = setInterval(cronometrar, 1000);
    }
)

btnPausa.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
})

btnReiniciar.addEventListener("click", () => {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    intervalo = null;
    actualizarCronometro();
})