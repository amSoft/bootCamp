const doblarValor = val => {
    if (typeof val === "number")
        return 2 * val;
    throw new Error("El valor debe ser de tipo numero");
}

console.log(doblarValor(2));

//Controlar errores con throw
//const doble= doblarValor("Hola");


//Controlar errores con try catch
const numero ="8";
try{

    const doble2 = doblarValor(numero);
    console.log(doble2);
} catch(e){
    console.error(e);
    console.log("Error " + e);
}
 



