function pedirCantidad() {
    const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

    const container = document.getElementById('inputs-container');
    container.innerHTML = '';

    for (let i = 0; i < cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Número ${i + 1}`;
        input.id = `numero${i + 1}`;
        container.appendChild(input);
    }
}

function realizarCalculos() {
    const inputs = document.querySelectorAll('#inputs-container input');
    
    let suma = 0;
    let multiplicacion = 1;
    
    for (let i = 0; i < inputs.length; i++) {
        const valor = Number(inputs[i].value);
        suma += valor;
        multiplicacion *= valor;
    }
    
    const promedio = suma / inputs.length;

    const triple = promedio * 3;

    const resultadoMenosDiez = triple - 10;

    const texto = document.getElementById('texto').value;
    const longitudTexto = texto.length;
    const textoEnMinusculas = texto.toLowerCase();
    const textoEnMayusculas = texto.toUpperCase();

    const mensajeFinal = `
        <p>El resultado de la suma es ${suma}</p>
        <p>El resultado de la multiplicación es ${multiplicacion}</p>
        <p>El promedio de los números es ${promedio}</p>
        <p>El triple del promedio es ${triple}</p>
        <p>El resultado final después de triplicar el promedio y restarle 10 es ${resultadoMenosDiez}</p>
        <p>El texto ingresado tiene ${longitudTexto} caracteres</p>
        <p>Texto en minúsculas: ${textoEnMinusculas}</p>
        <p>Texto en mayúsculas: ${textoEnMayusculas}</p>
    `;

    document.getElementById('resultados').innerHTML = mensajeFinal;
    
    /* const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);

    const suma = numero1 + numero2;
    const mensajeSuma = "El resultado de la suma es " + suma;

    const multiplicacion = numero1 * numero2;
    const mensajeMultiplicacion = "El resultado de la multiplicacion es " + multiplicacion;
    
    const texto = document.getElementById('texto').value;

    const promedio = suma / 2;

    const triple = promedio * 3;

    const resultadoMenosDiez = triple - 10;

    // Operaciones con el texto
    const longitudTexto = texto.length;
    console.log(longitudTexto)
    const textoEnMinusculas = texto.toLowerCase();
    const textoEnMayusculas = texto.toUpperCase();

    // Mostrar los resultados en el div
    const mensajeFinal = `
        <p>${mensajeSuma}</p>
        <p>${mensajeMultiplicacion}</p>
        <p>El promedio de los números es ${promedio}</p>
        <p>El triple del promedio es ${triple}</p>
        <p>El resultado final después de triplicar el promedio y restarle 10 es ${resultadoMenosDiez}</p>
        <p>El texto ingresado tiene ${longitudTexto} caracteres</p>
        <p>Texto en minúsculas: ${textoEnMinusculas}</p>
        <p>Texto en mayúsculas: ${textoEnMayusculas}</p>
    `;

    // Mostrar los resultados en el div
    document.getElementById('resultados').innerHTML = mensajeFinal; */
}
