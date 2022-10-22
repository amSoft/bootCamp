//Unir dos listas .concat

let lista1=[1,2,3,4];
let lista2=[5,6,7,8];
let lista3=lista1.concat(lista2);
console.log(lista3);

//Concatenar dos listas con el factor de propagación
console.log(...lista3);
const lista4 = [...lista1, ...lista2];
console.log(lista4);


//ERROR mala interpretación factor propagación
const lista5 = [lista1, lista2];
console.log(lista5);


//Obtener una lista a partir de otra .slice()
const lista=["hola",1,2,3,true];
console.log(lista);
console.log(lista.slice(1,3));

const lista6=lista.slice(1,3);
console.log(lista6);

