let lista=[1,'hola',false];
console.log(lista[0]);

//añadir elemento al final
lista.push(5);
console.log(lista);

//añadir elemento al inicio
lista.unshift(2);
console.log(lista);

//eliminar último elemento 
lista.pop();
console.log(lista);

//eliminar primer elemento 
lista.shift()
console.log(lista);


//Método para eliminar, modificar y añadir elementos.
const array2=[1,2,3,4,5,6];

array2.splice(2,1); //elimina a partir del segundo elemento 1 valor
console.log(array2);

array2.splice(2,0,8,4,5); //añade a partir de la posición 2 los elementos 8, 4 y 5
console.log(array2);

array2.splice(2,1,9); //modifica el valor a partir del segundo elemento por el nº indicado (9)
console.log(array2);

