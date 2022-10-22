//some

const array = [3,7,4,2,43,546,32];
const res = array.some(valor => valor<0);
console.log(res);

const existe = array.some(valor =>valor===4);
console.log (existe);

const existe2 = array.some(valor =>valor===1);
console.log (existe2);

const listaObjetos=[
    {nombre:"Gorka", edad:35},
    {nombre:"Leire",edad:24},
    {nombre:"Miguel",edad:32}
]

const existe3=listaObjetos.some(valor=> valor.nombre==="Gorka");
console.log(existe3);


const str="Hola como estás";
const ar_str=Array.from(str);
console.log(str);
console.log(ar_str);


