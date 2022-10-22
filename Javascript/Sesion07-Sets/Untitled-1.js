//Trabajando con fechas

const fecha=new Date();
console.log(fecha);
//IMPORTANTE los meses comienzan en el 0=Enero
const fecha2=new Date(2021,9,18);
console.log(fecha2);

const fecha3 = new Date("18 Octubre 2021");
console.log(fecha3);

//forma correcta de comparar fechas
console.log(fecha3.getTime()===fecha2.getTime());

//descomponer la fecha
console.log(fecha3.getDate());
console.log(fecha3.getMonth()+1);
console.log(fecha3.getFullYear());

//Mostrar fecha formateada
console.log(fecha3.toLocaleDateString("en-GB"));
