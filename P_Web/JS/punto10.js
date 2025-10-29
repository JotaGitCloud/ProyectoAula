let productos = [
  { id: 1, nombre: "Lapicero" },
  { id: 2, nombre: "Cuaderno" },
  { id: 3, nombre: "Mochila" }
];

function getProducto(id) {
  return new Promise((resolve, reject) => {
    let encontrado = null;

    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        encontrado = productos[i];
        break;
      }
    }

    if (encontrado) {
      resolve(encontrado);
    } else {
      reject("Producto no encontrado");
    }
  });
}

// Pruebinhas xd 
getProducto(2)
  .then(p => console.log("Producto encontrado:", p))
  .catch(err => console.log("Error:", err));

/*getProducto(5)
  .then(p => console.log("Producto encontrado:", p))
  .catch(err => console.log("Error:", err));*/