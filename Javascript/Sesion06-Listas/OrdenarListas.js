// .sort()
const array=[2,9,4,78,20];
console.log(array);
array.sort((a, b) => a-b);
console.log(array);

const listaObjetos=[
    {nombre:"Gorka", edad:35},
    {nombre:"Leire",edad:24},
    {nombre:"Miguel",edad:32}
]
listaObjetos.sort((a,b)=>a.edad-b.edad);
console.log(listaObjetos);
