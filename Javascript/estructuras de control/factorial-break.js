let numero=5;
let factorial=1;
let contador=1;
while (true){
    factorial= factorial * numero;
    numero--;
    if (numero==1){
        break;
    }
}
console.log("El factorial de 5 es: " +factorial);