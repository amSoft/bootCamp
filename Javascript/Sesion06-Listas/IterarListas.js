//iterar valores de una lista
const array=[1,2,3,4,5,6,7,8,9];

//for tradicional
for (let i=0; i<array.length;i++){
    console.log(array[i]);
}

//forma moderna y más eficiente (ES6) .forEach()
array.forEach(valor=>{
    console.log(valor);
})

//Búsqueda valor en array .find()
var encontrado= array.find(valor =>{
    if (valor==5){
        return true;
    }
})
console.log(encontrado);

const listaObjetos=[
    {nombre:"Gorka", edad:35},
    {nombre:"Leire",edad:24},
    {nombre:"Miguel",edad:32}
]

const objeto = listaObjetos.find(o =>{
    if (o.nombre=="Miguel"){
        return true;
    }
})
console.log(objeto.edad);

//otra forma
const objeto2 = listaObjetos.find( o => o.nombre=="Miguel");
console.log(objeto2.edad);