const boton = document.getElementById("btn");
console.log(boton);
boton.addEventListener("click",()=>{
    //alert("click"); //Muestra mensaje por pantalla
const resp =   confirm("¿Estas de acuerdo?") 
if (resp==true){
    console.log("OK...");
}else{
    console.log("NO OK...")
}

//Otra forma de utilizar confirm
confirm("¿Estas de acuerdo?") 
? console.log("Has aceptado")
: console.log("NO has aceptado las condiciones")

})

//Petición de datos
const botonInfo = document.getElementById("info");
botonInfo.addEventListener("click",()=>{
    const nombre = prompt("cual es tu nombre?")
    if (nombre) //Si ha rellenado algo
        console.log ("Tu nombre es "+ nombre)
    else
        console.log("No has facilitado tu nombre")
})



