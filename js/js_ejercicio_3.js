// creo e identifico los elementos del DOM
let boton = document.getElementById("boton");
let lista = document.getElementById("lista");
let item = document.getElementById("itemInput");

// agregar un item
function agregarElemento() {
    let itemTexto = item.value;
    if (itemTexto === ""){
        alert ("Hay que escribir un elemento para agregar");
        return;
    }
    let newItem = document.createElement("li");
    newItem.textContent = itemTexto;
    let botonEliminar = document.createElement("button");
    botonEliminar.style.marginLeft = "10px";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => newItem.remove());
    newItem.appendChild(botonEliminar);   
    lista.appendChild(newItem);
    item.value = " ";
}

boton.addEventListener("click", agregarElemento);
item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarElemento();
    }
})




