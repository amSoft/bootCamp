//Comparar listas
// .every()

const array = [4,6,7,8,2,3,6,1,-4,12,-5,5,140];
const resultado=array.every(valor =>typeof valor ==="number");
console.log(resultado);

const resultado2=array.every(valor => valor >0);
console.log(resultado2);
console.log(array);


const array1 = [1,2,3,4];
const array2 = [1,2,3,4];
console.log(array1===array2); //Esta comparación devuelve falso.

const comparaArrays = (array_1,array_2) =>{
    if (array_1.length != array_2.length) return false;
    const res = array_1.every((valor,i) => valor === array_2[i]);
    return res
}
console.log(comparaArrays(array1,array2));