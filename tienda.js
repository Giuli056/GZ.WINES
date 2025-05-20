// Variables y constantes
const vinos = [
    { nombre: "Cabernet Sauvignon", precio: 20 },
    { nombre: "Merlot", precio: 15 },
    { nombre: "Chardonnay", precio: 18 }
  ];
  
  let carrito = [];
  
  // Verificación de edad
  let edad = prompt("¿Cuántos años tenés?");
  if (edad >= 18) {
    alert("Ya podes tomar vinito.");
    
    // Funciones
    function mostrarCatalogo() {
      console.log("Catálogo de Vinos:");
      vinos.forEach((vino, indice) => {
        console.log(${indice + 1}. ${vino.nombre} - $${vino.precio});
      });
    }
  
    function agregarVinoAlCarrito() {
      mostrarCatalogo();
      let indice = parseInt(prompt("Ingrese el número del vino que desea agregar al carrito: ")) - 1;
      if (indice >= 0 && indice < vinos.length) {
        carrito.push(vinos[indice]);
        console.log(Se agregó ${vinos[indice].nombre} al carrito.);
      } else {
        console.log("Índice inválido.");
      }
    }
  
    function calcularTotal() {
      let total = carrito.reduce((acumulador, vino) => acumulador + vino.precio, 0);
      console.log(Total: $${total});
    }
  
    // Interacción
    alert("Bienvenido al simulador de tienda de vinos.");
    let opcion;
    do {
      opcion = prompt("Ingrese una opción:\n1. Ver catálogo de vinos\n2. Agregar vino al carrito\n3. Calcular total\n4. Salir");
      switch (opcion) {
        case "1":
          mostrarCatalogo();
          break;
        case "2":
          agregarVinoAlCarrito();
          break;
        case "3":
          calcularTotal();
          break;
        case "4":
          alert("Gracias por usar el simulador.");
          break;
        default:
          console.log("Opción inválida.");
      }
    } while (opcion !== "4");
  } else {
    alert("Aún no puedes ingresar.");
  }