//Importar funciones modo es6
import { factorial, suma} from "./modulos/matematicas.js"


const sum = suma(3,12);
console.log(sum);
const fact=factorial(10);
console.log(fact);


//Importar todas las funciones de un módulo
import * as mate from "./modulos/matematicas.js"

const sum2 = mate.suma(3,12);
console.log(sum2);
const fact2=mater.factorial(10);
console.log(fact2);