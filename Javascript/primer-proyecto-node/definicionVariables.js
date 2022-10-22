const nombre="Aurelio Magdaleno";
const edad=54;
const eresDesarrollador=true;
const fechaNacimiento= new Date(1967,9,31);
const libro={
    titulo:"Reina roja",
    autor:"Juan Gómez Jurado",
    fecha: new Date(2018,10,1),
    url:"https://www.amazon.es/Reina-roja-Trama-Juan-Gómez-Jurado/dp/8466664416"
}
const lista=[nombre,edad,eresDesarrollador,fechaNacimiento,libro];
console.log(lista);
console.log("Mi libro preferido es:" +lista[4].titulo);

