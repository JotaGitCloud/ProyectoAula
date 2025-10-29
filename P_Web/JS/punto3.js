function recibirNumero(num) {

    return (num == 0) ? "Cero" 
         : (num > 0) ? "Positivo" 
         : "Negativo";
         
}

// Examplinho do uso
// let numero = -3;
// let numero = 0;
let num = 6;
console.log(recibirNumero(num));