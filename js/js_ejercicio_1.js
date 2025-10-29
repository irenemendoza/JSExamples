let pagina = document.getElementById("container");
let boton = document.getElementById("colorButton");

function createRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

boton.addEventListener("click", () => {
    let color = createRandomColor();
    pagina.style.backgroundColor = color;
})