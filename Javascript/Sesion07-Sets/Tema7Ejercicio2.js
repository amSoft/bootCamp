const datosPersonales={
    nombre:"Aurelio",
    apellidos:"Magdaleno Txapartegi",
    edad:54,
    altura:1.74,
    eresDesarrollador:true
};

const miEdad=datosPersonales.edad;

const datosAmigos=[
    {
     nombre:"Juan",
     apellidos:"Pérez",
     edad:57,
     altura:1.76,
     eresDesarrollador:false
    },
    {
        nombre:"Pedro",
        apellidos:"De la Cruz",
        edad:44,
        altura:1.65,
        eresDesarrollador:false
    }
];
const listaPersona=[datosPersonales];

const listaPersonas = listaPersona.concat(datosAmigos);


const listaOrdenada=listaPersonas.sort((a,b)=>b.edad-a.edad);

listaOrdenada.forEach(valor=>{
    console.log(valor.nombre+ " " + valor.edad);
});