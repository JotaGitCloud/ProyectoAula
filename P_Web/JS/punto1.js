//Var sirve para declarar variables con un alcance global, osea, se puede acceder desde cualquier parte del código
var nombre = "Juan";
console.log("var:", nombre); 
// Se puede volver a declarar y reasignar
var nombre = "Pedro";
console.log("var redeclarado:", nombre);

//let sirve para declarar variables con un alcance de bloque
let edad = 20;
console.log("let:", edad); 
// Se puede reasignar pero no redeclarar en el mismo bloque
edad = 21;
console.log("let reasignado:", edad);

//Const sirve para declarar constantes u valores que no se podrán cambiar después
const PI = 3.1416;
console.log("const:", PI);
//const PI = 3.14; -- Esto generará un error porque no se puede redeclarar ni reasignar 