//.map() 

const array=["San Sebastíán","Madrid","Alicante","Bilbao"];
array.forEach(v=>
    {
        console.log(v);
    });

    const newArray = array.map((valor,indice)=>{ 
        indice+1 +'-'+valor}
        
        );
console.log(newArray);
const listaObjetos=[
    {nombre:"Gorka", edad:35},
    {nombre:"Leire",edad:24},
    {nombre:"Miguel",edad:32}
]

//.filter()
const listaMayores30=listaObjetos.filter(obj=> obj.edad>30);
    
console.log(listaMayores30)

const nuevaLista=listaObjetos.filter(ob=>ob.nombre!="Miguel");
console.log(nuevaLista);


//
const valores = [3,56,23,5,90,100];
const suma = valores.reduce((acumulado,valor,i,arrayOriginal) => 

{
    console.log(acumulado);
    console.log(valor);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado+valor;
}
);
console.log(suma);