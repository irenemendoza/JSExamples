let texto = document.getElementById("itemInput");
let lista = document.getElementById("lista");
let items = Array.from(lista.children);

texto.addEventListener("input", () => {
    let filtro = texto.value.toLowerCase();
    items.forEach(li => {
        if (li.textContent.toLowerCase().startsWith(filtro)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
});