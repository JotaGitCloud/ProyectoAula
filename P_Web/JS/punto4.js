const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};

const { titulo, duracion, temas } = curso;
const [primerTema] = temas;

console.log("Título:", titulo);
console.log("Duración:", duracion);
console.log("Primer tema:", primerTema);
