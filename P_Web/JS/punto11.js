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

async function buscarProducto(id) {
  try {
    let producto = await getProducto(id);
    console.log("Producto encontrado:", producto);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Ya no se que poner xd 

//buscarProducto(2);
buscarProducto(5); 