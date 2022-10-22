//Trabajando con objetos

const obj = {
    id:4,
    nombre:"Juan",
    apellidos:"González",
    isDeveloper:true,
    libros_favoritos:["El método","El código de la manigestación"]
}

console.log(obj);
console.log(obj.id);
console.log(obj["id"]);
const prop= "isDeveloper";
console.log(obj[prop]);

const obj2=obj; //lo replica y asigna la misma dirección de memoria
console.log(obj2);
obj2.nombre="Iñigo"; //Se están modificando los dos objetos
console.log(obj.nombre);
console.log(obj.nombre);

const obj3 = {...obj};//Por propagación. lo replica pero no utiliza la misma direccion de memoria))
obj3.nombre="Pedro";
console.log(obj.nombre);
console.log(obj3.nombre);


//Ordenar listas de objetos en función de una propiedad

const listaPeliculas=[
    {titulo:"Lo que el viento se llevó",anyo:1939},
    {titulo:"Titanic",anyo:1997},
    {titulo:"El efecto mariposa",anyo:2004},
    {titulo:"TED",anyo:2000}

];
console.log(listaPeliculas);
listaPeliculas.sort((a,b)=>a.anyo-b.anyo); //(Ordena la lista por el campo anyo
console.log(listaPeliculas);