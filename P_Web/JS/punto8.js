let usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "María" },
  { id: 3, nombre: "Pedro" }
];

let usuario = usuarios.find(u => u.id === 2) || {};

console.log("Resultado:", usuario);