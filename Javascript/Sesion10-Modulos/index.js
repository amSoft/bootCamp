//instanciar las funciones de un módulo
const moduloMatematicas = require ("./modulos/matematicas.js")
const fact = moduloMatematicas.factorial(10);
console.log(fact);

//Otra forma de instanciarlo
const {factorial, suma} = require ("./modulos/matematicas.js");
const fact2=factorial(10);
console.log(fact2);