function verificarEdad() {

    let edad = Number(document.getElementById('edad').value);

    if (edad > 0) {
        if (edad >= 18) {
            alert("Eres mayor de edad 🎉");
        } else {
            alert("Eres menor de edad 🤡");
        }
    } else {
        alert("Edad incorrecta");
    }
}
