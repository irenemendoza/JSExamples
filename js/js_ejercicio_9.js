let texto = document.getElementById("taskInput");
let botonAgregar = document.getElementById("addTask");
let lista = document.getElementById("taskList");
let contenedor = document.getElementById("contenedor");

function agregarTarea() {
    let tarea = texto.value.trim();
    if (tarea === ""){
        return;
    }
    let nuevoItem = document.createElement("li");
    nuevoItem.className = "tareasLista";
    let nombreItem = document.createElement("span");
    nombreItem.textContent = tarea;
    let check = document.createElement("input");
    check.type = "checkbox";
    nuevoItem.appendChild(nombreItem);
    nuevoItem.appendChild(check);
    lista.appendChild(nuevoItem);
    texto.value = "";
    guardarLista();
    check.addEventListener("change", guardarLista);   
}


function guardarLista() {
    let datos = [];
    let elementos = document.getElementsByClassName("tareasLista");
    for (let elemento of elementos) {
        let tareaNombre = elemento.querySelector("span").textContent;
        let check = elemento.querySelector("input[type='checkbox']").checked;
        datos.push({tareaNombre, check})
    }
    localStorage.setItem("datos", JSON.stringify(datos));
}

function cargarLista() {
    if (localStorage.getItem("datos")) {
        let listaGuardada = JSON.parse(localStorage.getItem("datos"));
        for (let elementoLista of listaGuardada) {
            let nuevoItem = document.createElement("li");
            nuevoItem.className = "tareasLista";
            let nombreItem = document.createElement("span");
            nombreItem.textContent = elementoLista.tareaNombre;
            let check = document.createElement("input");
            check.type = "checkbox";
            check.checked = elementoLista.check;
            nuevoItem.appendChild(nombreItem);
            nuevoItem.appendChild(check);
            lista.appendChild(nuevoItem);
            check.addEventListener("change", guardarLista);
        }
    }
}

function eliminarTerminadas() {
    let listaTareas = document.getElementsByClassName("tareasLista");
    let eliminadas = false;
    for (let tarea of listaTareas){
        let check = tarea.querySelector("input[type='checkbox']");
        if (check.checked) {
            tarea.remove();
        }
        eliminadas = true;
    }
    if (!eliminadas) {
        alert("No hay tareas completadas para eliminar")
    }
    guardarLista();
}

function borrarLista() {
    if (!confirm("¿Seguro que quieres borrar toda la lista?")) return;
    let listaTareas = Array.from(document.getElementsByClassName("tareasLista"));
    for (let tarea of listaTareas){
        tarea.remove();
    }
    localStorage.clear();
}


botonAgregar.addEventListener("click", agregarTarea);
cargarLista();
let eliminarBtn = document.createElement("button");
eliminarBtn.textContent = "Eliminar tareas finalizadas";
eliminarBtn.className = "botonEliminar";
contenedor.appendChild(eliminarBtn);
eliminarBtn.addEventListener("click", eliminarTerminadas);

let resetBtn = document.createElement("button");
resetBtn.textContent = "Borrar lista";
resetBtn.style.marginLeft="5px";
contenedor.appendChild(resetBtn);
resetBtn.addEventListener("click", borrarLista);