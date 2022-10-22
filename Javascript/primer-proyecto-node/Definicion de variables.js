/*Notación

;  --> Final de línea (En la versión actual ya no es necesario)
.  --> Se utiliza en objetos para acceder a los atributos
[] --> Listas, arreglos o arrays
() --> Funciones
{} --> Inicio y finalización de bloque de código

*/



//Listas, arrays o arreglos.
const list=[1,"hola",true];
console.log(list);

const lista2=new Array(1,"hola",true);
console.log(lista2);

const lista3=new Array(3);
console.log(lista3);
lista3[0]=2;
console.log(lista3);

//Objetos
const movil = {
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    cargador:true,
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32,
    }
}
console.log(movil.altura);
console.log(movil.tarjeta.almacenamiento);
console.log(movil.marca);
movil.marca="Apple";
console.log(movil.marca);


//Fechas

const ahora = new Date();
console.log(ahora);

const fecha = new Date(2022,2,15); //Enero es el mes 0
console.log(fecha);

console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());