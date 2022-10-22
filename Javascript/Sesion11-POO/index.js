const persona = {
    nombre:"Gorka",
    edad:34,
    isDeveloper:true,
    saludo: function(){
        console.log('Hola')
    }

}



const creaPersona = (nombre, edad, isDeveloper) =>{
return {
    nombre,
    edad,
    isDeveloper,
    saludo: function (){
        console.log('hello')
    }
}
}
const persona1 = creaPersona("Juan",23,true);
const persona2 = creaPersona("Pepe",22,false);
console.log(persona1);
console.log(persona2);



