let edad = prompt ("¿Cuál es tu edad?");

if (edad >= 18) {
  alert("Eres mayor de edad.");
} else {
  alert("No eres mayor de edad.");
}

class Vino {
 constructor ( nombre, clase, precio) {
  this.nombre = nombre;
  this.clase = clase;
  this.precio = precio;
 }
 mostrar(){
  console.log ("bodega" ,{this:nombre} ,"corte" ,{this:clase}, "precio", {this:precio})
 }
} 

let vinito1 = new Vino ("arboles", "malbec", 6000);
let vinito2 = new Vino ("felicien", "cabernet", 8000);
let vinito3 = new Vino ("mascara", "pinot", 9000);
let vinito4 = new Vino ("ana", "merlot", 7000);



carrito= [];
carrito.push(vinito1);
carrito.push(vinito2);
carrito.push(vinito4);

console.log (carrito);

let copa = "copa de regalo"; 

if (carrito.length >= 3) {
  carrito.push(copa)
  console.log("sa ha agregado una copa de regalo al carrito")
}




