const usuario = {
  nombre: "Juan",
  edad: 22,
  carrera: "Ingeniería en Sistemas"
};

const usuarioJSON = JSON.stringify(usuario);

localStorage.setItem("usuarioGuardado", usuarioJSON);

const datosRecuperados = localStorage.getItem("usuarioGuardado");

const usuarioObj = JSON.parse(datosRecuperados);

console.log("Objeto original:", usuario);
console.log("En JSON (texto):", usuarioJSON);
console.log("Recuperado del localStorage:", datosRecuperados);
console.log("Convertido otra vez a objeto:", usuarioObj);