//Funciones tipo flecha - funciones anónimas
const array = [1,5,6,2,7,12,8,92];

//crear otro array con el doble de cada valor
const array2 = array.map((valor)=>valor*2);
console.log(array2);

//funciones del tipo flecha
const dobleValor = valor=>valor*2;
console.log(dobleValor(3));

//crear otro array con el doble de cada valor utilizando la función 
const array3 = array.map(dobleValor);
console.log(array3);

