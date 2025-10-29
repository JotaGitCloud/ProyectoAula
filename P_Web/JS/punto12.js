let posts = [
  { id: 1, titulo: "Primer post" },
  { id: 2, titulo: "Segundo post" }
];

// Obtener
function obtenerPost() {
  return new Promise(resolve => resolve(posts));
}

// Obtener por id
function obtenerPorId(id) {
  return new Promise((resolve, reject) => {
    let post = posts.find(p => p.id === id);
    post ? resolve(post) : reject("Post no encontrado");
  });
}

// Agregar
function añadirPost(post) {
  return new Promise((resolve, reject) => {
    if (post.titulo) {
      posts.push(post);
      resolve("Post agregado");
    } else {
      reject("Falta título");
    }
  });
}

// Bueno en serio no se que mas poner u.u

obtenerPost().then(p => console.log("Todos los posts:", p));

obtenerPorId(2)
  .then(p => console.log("Post encontrado:", p))
  .catch(err => console.log("Error:", err));

añadirPost({ id: 3, titulo: "Tercer post" })
  .then(msg => console.log(msg))
  .then(() => obtenerPost().then(p => console.log("Posts actualizados:", p)))
  .catch(err => console.log("Error:", err));