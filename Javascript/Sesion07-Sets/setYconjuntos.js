//sets o conjuntos

const array=[1,2,3,4,5,6,1];

const miSet=new Set(array); //elimina duplicados de valores
console.log(array);
console.log(miSet);

//añadir valores
miSet.add(9);
console.log(miSet);
miSet.add(1); //No lo añade al ya existir
console.log(miSet);

//borrar valores
miSet.delete(3);
console.log(miSet);


//Comprobar si contiene un valor.
console.log(miSet.has(5));
console.log(miSet.size);


//Crear iterador con los valores
const it_miSet=miSet.values();


//borrar todo
miSet.clear();
console.log(miSet);
    
