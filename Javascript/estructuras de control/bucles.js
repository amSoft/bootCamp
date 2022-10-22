//Bucles


//Bucle for
for (let i=0; i<10;i++){
    console.log(i);
}

let lista=[1,4,6,7,8,9];
for (let i=0; i< lista.length; i++){
    console.log(i);
}

//for .. of para listas
for (let valor of lista){
    console.log(valor);
}

//forEach

lista.forEach(valor =>{
    console.log(valor);
})


//for in

let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper:true
}
for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
    
}



//Bucles while

let i=0;
let max=10;
while (i<10){
    console.log(i);
    i++;
}

i=15;
do {
console.log("estoy dentro del while");
i++;
}while (i<max);



//Utilización de break y continue
lista=[2,4,6,8,10,12];
for (let i=0; i<lista.length;i++){
    
    if (lista[i]==4){
        continue;
    }
    if (lista[i]>8) {
        break;
    }
    console.log(lista[i]);
}

//Etiquetas en los bucles
var unidades=0;
var decenas=0;
bucleDecenas: while (unidades<1000){
    
    BucleUnidades: while (true){
        console.log("Decenas:" +decenas + ", unidades:" +unidades);
        unidades++;
        if (unidades===10){
            unidades=0;
            decenas++;
            break BucleUnidades;
        }
        if (decenas===3){
            break bucleDecenas;
        }
    }

}
