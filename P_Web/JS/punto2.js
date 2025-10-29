
function mostrarUsuario(usuario) {
    return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}.`;
}

// Ejemplinho do uso mano kkkkkkkkkkkkkk
let usuario = { nombre: "Ana", rol: "administrador" };
console.log(mostrarUsuario(usuario));