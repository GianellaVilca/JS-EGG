function generarCampos() {
    const cantidad = Number(document.getElementById('cantidadProductos').value);
    const form = document.getElementById('formProductos');
    form.innerHTML = ''; 

    for (let i = 1; i <= cantidad; i++) {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        const nombreLabel = document.createElement('label');
        nombreLabel.innerText = `Producto ${i}: `;
        const nombreInput = document.createElement('input');
        nombreInput.type = 'text';
        nombreInput.id = `producto${i}`;
        nombreInput.placeholder = 'Nombre del producto';

        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.id = `cantidad${i}`;
        cantidadInput.placeholder = 'Cantidad';

        const precioInput = document.createElement('input');
        precioInput.type = 'number';
        precioInput.id = `precio${i}`;
        precioInput.placeholder = 'Precio por unidad';

        divProducto.appendChild(nombreLabel);
        divProducto.appendChild(nombreInput);
        divProducto.appendChild(cantidadInput);
        divProducto.appendChild(precioInput);
        form.appendChild(divProducto);
    }
}

function calcularTotal() {
    const cantidad = Number(document.getElementById('cantidadProductos').value);
    let totalApagar = 0;
    let resumen = '';

    for (let i = 1; i <= cantidad; i++) {
        const nombre = document.getElementById(`producto${i}`).value;
        const cantidad = Number(document.getElementById(`cantidad${i}`).value);
        const precio = Number(document.getElementById(`precio${i}`).value);

        const subtotal = cantidad * precio;
        totalApagar += subtotal;

        resumen += `<p>Producto: ${nombre}, Precio Unitario: $${precio}, Cantidad: ${cantidad}, Subtotal: $${subtotal}</p>`;
    }

    resumen += `<h3>Total a pagar: $${totalApagar}</h3>`;

    document.getElementById('resultado').innerHTML = resumen;
}

