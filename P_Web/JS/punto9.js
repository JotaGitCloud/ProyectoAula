function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function operar(a, b, callback) {
  return callback(a, b);
}

// Pruebinhas xd
console.log("Suma:", operar(5, 3, sumar));          
console.log("Resta:", operar(5, 3, restar));        
console.log("Multiplicación:", operar(5, 3, multiplicar)); 