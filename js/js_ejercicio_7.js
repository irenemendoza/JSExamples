let longitud = document.getElementById("lengthInput");
let boton = document.getElementById("button");
let password = document.createElement("p");
let contenedor = document.getElementById("contenedor");
contenedor.appendChild(password);
password.style.marginTop = "20px";
password.style.fontSize = "48px";

// creación de contraseña

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = "!@#$%{}_-[]";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
const valorRandom = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

// Click event for generate button
boton.addEventListener("click", () => {
    if (longitud.value < 4) {
        alert ("La longitud de la contraseña debe ser superior a 4");
        longitud.value = "";
        return;
    }
    generatePassword();
    
});

// Click event for input focus
longitud.addEventListener("click", () => password.textContent = "");


// Function for generate password
function generatePassword() {
	let generatePassword = "";
    let longitudPassword = longitud.value; 
    // Creo una parte de la contraseña en la que se incluyen los caracteres obligatorios
    let caracteresObligatorios = [valorRandom.lower(), valorRandom.upper(), valorRandom.number(), valorRandom.symbol()];
    generatePassword = caracteresObligatorios.join("");
    // Termino de completar la contraseña con más caracteres ya aleatorios
    const tipoCaracteres = ["lower", "upper", "number", "symbol"];
    for (let long = caracteresObligatorios.length; long < longitudPassword; long ++){
        let tipo = tipoCaracteres[Math.floor(Math.random()*tipoCaracteres.length)];
        let nuevoCaracter = valorRandom[tipo]();
        generatePassword += nuevoCaracter;
    }
    // Para desordenar el contenido de la contraseña: 
    let passwordArray = generatePassword.split("");
    let passwordMezclada = mezclar(passwordArray);
    let nuevaPassword = passwordMezclada.join("");
    password.textContent = nuevaPassword;
    longitud.value = null;
}

function mezclar(array) {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}