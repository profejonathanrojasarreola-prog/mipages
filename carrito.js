let carrito = [];

// AGREGAR PRODUCTO AL CARRITO

function agregarCarrito(nombre, precio, idCantidad) {

```
// Verificar que el cliente haya escrito sus datos

let nombreCliente = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let telefono = document.getElementById("telefono").value;

if (nombreCliente == "" || correo == "" || telefono == "") {

    alert("Primero debes escribir tus datos de contacto.");

    return;
}


// Obtener cantidad

let cantidad = document.getElementById(idCantidad).value;

cantidad = parseInt(cantidad);


if (cantidad <= 0) {

    alert("La cantidad debe ser mayor a 0.");

    return;
}


// Buscar si el producto ya está en el carrito

let productoExistente = carrito.find(
    producto => producto.nombre === nombre
);


if (productoExistente) {

    productoExistente.cantidad += cantidad;

} else {

    carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });

}


mostrarCarrito();
```

}

// MOSTRAR CARRITO

function mostrarCarrito() {

```
let lista = document.getElementById("listaCarrito");

lista.innerHTML = "";

let total = 0;


if (carrito.length === 0) {

    lista.innerHTML = "<p>No hay productos agregados.</p>";

    document.getElementById("total").textContent = "0";

    return;
}


carrito.forEach((producto, indice) => {

    let subtotal = producto.precio * producto.cantidad;

    total += subtotal;


    let item = document.createElement("div");

    item.className = "item-carrito";


    item.innerHTML = `
        <span>
            ${producto.nombre}
            x ${producto.cantidad}
            = $${subtotal}
        </span>

        <button type="button"
                onclick="eliminarProducto(${indice})">
            Eliminar
        </button>
    `;


    lista.appendChild(item);

});


document.getElementById("total").textContent = total;


// Guardar información para Formspree

let pedido = "";

carrito.forEach(producto => {

    pedido += producto.nombre +
              " x " +
              producto.cantidad +
              " = $" +
              (producto.precio * producto.cantidad) +
              "\n";

});


document.getElementById("pedido").value = pedido;

document.getElementById("totalPedido").value = total;
```

}

// ELIMINAR PRODUCTO

function eliminarProducto(indice) {

```
carrito.splice(indice, 1);

mostrarCarrito();
```

}
