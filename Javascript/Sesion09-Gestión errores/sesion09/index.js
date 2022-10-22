const winston = require('winston');




//mensajes por consola
console.log("Hola estoy saliendo por pantalla");
console.info("Hoa esto es un mensaje informativo");
console.debug("Esto es un mensaje de debug");
console.warn("Esto es un mensaje de advertencia");
console.error ("Esto es un mensaje de error");



//estandar de niveles logger
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  };



//Trabajando con el objeto logger \\sesino09
const logger = require ('./logger');
logger.info("Hola esto es un mensaje informativo");
logger.debug("Esto es un mensaje de debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error ("Esto es un mensaje de error");
