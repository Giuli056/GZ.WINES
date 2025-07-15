let carrito = []

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar")) {
        const nombre = e.target.dataset.nombre;
        const precio = parseFloat(e.target.dataset.precio)
        agregarProductoAlCarrito(nombre, precio)
    }
});

function agregarProductoAlCarrito(nombre, precio) {
    const productoExistente = carrito.find((p) => p.nombre === nombre)
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 })
    }
    mostrarCarrito()
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById("carrito")
    carritoDiv.innerHTML = "";
    carrito.forEach((producto) => {
        const productoHTML = document.createElement("div")
        productoHTML.innerHTML = `
            ${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}
            <button class="eliminar" data-nombre="${producto.nombre}">Eliminar</button>
        `;
        carritoDiv.appendChild(productoHTML)
    });
    calcularTotal();

    const eliminarBotones = document.getElementsByClassName("eliminar")
    Array.from(eliminarBotones).forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const nombre = e.target.dataset.nombre
            eliminarProductoDelCarrito(nombre)
        })
    })
}

function calcularTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    document.getElementById("total").innerHTML = 'Total:' +total
}

function eliminarProductoDelCarrito(nombre) {
    const producto = carrito.find((p) => p.nombre === nombre)
    if (nombre.cantidad > 1) {
        producto.cantidad--
    } else {
        carrito = carrito.filter((p) => p.nombre !== nombre)
    }
    mostrarCarrito()
}