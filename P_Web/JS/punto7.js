let productos = [
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Monitor", precio: 200 }
];

productos.sort((a, b) => a.precio - b.precio);

console.log("Productos:");
productos.forEach(p => {
  console.log(`${p.nombre} - $${p.precio}`);
});
